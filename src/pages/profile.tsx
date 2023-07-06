import React, { useState } from 'react'

const Profile: React.FC = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [dateOfBirth, setDateOfBirth] = useState('')
  const [sex, setSex] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Perform any necessary logic with the form values
    console.log('Form Values:', {
      firstName,
      lastName,
      dateOfBirth,
      sex,
      weight,
      height
    })
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Profile</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block mb-2 font-medium">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block mb-2 font-medium">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="dateOfBirth" className="block mb-2 font-medium">
            Date of Birth:
          </label>
          <input
            type="date"
            id="dateOfBirth"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
          <label htmlFor="sex" className="block mb-2 font-medium">
            Sex:
          </label>
          <input
            type="text"
            id="sex"
            value={sex}
            onChange={(e) => setSex(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        <div>
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

        <div>
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

        <div className="col-span-2">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-1/2 mx-auto"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  )
}

export default Profile
