import axios from 'axios'

export const createDiet = async (formData: any) => {
  try {
    //console.log(prompt);
    const response = await axios.post('/api/createDiet', formData)
    //console.log("API response ->", response.data)
    return response.data
  } catch (error) {
    throw new Error('Failed to create diet. Please try again.') // You can customize the error handling as per your requirements
  }
}
