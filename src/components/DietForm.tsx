import React, { useState } from 'react'
import { createDiet } from '../utils/createDiet'

const DietForm: React.FC = () => {
  const [gender, setGender] = useState('')
  const [diet, setDiet] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [monthlyWeightLoss, setMonthlyWeightLoss] = useState('')
  const [selectedFoods, setSelectedFoods] = useState<string[]>([])
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  //const [formValues, setFormValues] = useState<any>({});

  const foodOptions = [
    { value: 'food1', label: 'Rice' },
    { value: 'food2', label: 'Chapati' },
    { value: 'food3', label: 'Chicken' },
    { value: 'food3', label: 'Apple' },
    { value: 'food3', label: 'Fish' },
    { value: 'food3', label: 'Oats' },
    { value: 'food3', label: 'Eggs' }
    // Add more food options here
  ]

  const handleFoodSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const foodValue = e.target.value
    setSelectedFoods((prevSelectedFoods) => {
      if (prevSelectedFoods.includes(foodValue)) {
        return prevSelectedFoods.filter((food) => food !== foodValue)
      } else {
        return [...prevSelectedFoods, foodValue]
      }
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    // console.log('Form Values:', {
    //   gender,
    //   age,
    //   height,
    //   weight,
    //   monthlyWeightLoss,
    //   selectedFoods,
    // });

    const formData = {
      gender,
      age,
      height,
      weight,
      monthlyWeightLoss,
      selectedFoods
    }

    try {
      const response = await createDiet(formData)
      //console.log(response.data.choices[0].message.content);
      setDiet(response.data.choices[0].message.content)
      //console.log('API Response:', response);
      // Handle the API response as needed
    } catch (error) {
      console.error('API Error:', error)
      // Handle the API error
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-4 border border-gray-300 rounded-lg shadow"
      >
        <div className="mb-3">
          <label htmlFor="gender" className="block mb-2 font-medium">
            Gender:
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="block mb-2 font-medium">
            Age:
          </label>
          <input
            type="text"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="height" className="block mb-2 font-medium">
            Height (cm):
          </label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="weight" className="block mb-2 font-medium">
            Weight (kgs):
          </label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="monthlyWeightLoss" className="block mb-2 font-medium">
            Monthly Weight Loss Goal (kgs):
          </label>
          <input
            type="text"
            id="monthlyWeightLoss"
            value={monthlyWeightLoss}
            onChange={(e) => setMonthlyWeightLoss(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div className="mb-3">
          <label className="block mb-2 font-medium">Select Foods:</label>
          <div>
            {foodOptions.map((food) => (
              <label key={food.value} htmlFor={food.value} className="flex items-center">
                <input
                  type="checkbox"
                  id={food.value}
                  value={food.value}
                  checked={selectedFoods.includes(food.value)}
                  onChange={handleFoodSelection}
                  className="mr-2"
                />
                {food.label}
              </label>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          Submit
        </button>
        {/* {formSubmitted && !loading && diet && (
        <>
        <div className="mt-4 p-4 bg-gray-100">
          <h2 className="text-lg font-semibold mb-2">Form Information:</h2>
          <p>Selected Foods: {selectedFoods.join(', ')}</p>
          <p>Gender: {gender}</p>
          <p>Age: {age}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <p>Monthly Weight Loss Goal: {monthlyWeightLoss}</p>
          
        </div>
        <div>{diet}</div>
        </>
      )} */}
      </form>
      {formSubmitted && !loading && diet && (
        <div className="mx-20">
          <div className="mt-4 p-4 bg-gray-100">
            <h2 className="text-lg font-semibold mb-2">Form Information:</h2>
            {/* <p>Selected Foods: {selectedFoods.join(', ')}</p> */}
            <p>Gender: {gender}</p>
            <p>Age: {age}</p>
            <p>Height: {height}</p>
            <p>Weight: {weight}</p>
            <p>Monthly Weight Loss Goal: {monthlyWeightLoss}</p>
          </div>
          <div className="mt-4 p-4 bg-gray-100">
            <h2 className="text-lg font-semibold mb-2">Your Results:</h2>
            <div style={{ whiteSpace: 'pre-line' }}>{diet}</div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DietForm
