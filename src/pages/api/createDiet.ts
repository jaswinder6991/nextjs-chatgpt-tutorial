// pages/api/createDiet.ts

import { NextApiRequest, NextApiResponse } from 'next'
import { ChatCompletionRequestMessage } from 'openai'

export default async function createDiet(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    // Extract the form data from the request body
    //const { gender, age, height, weight, monthlyWeightLoss, selectedFoods } = req.body;
    //console.log("Inside the API",req)
    // Perform your logic to create the diet
    // ...
    const { gender, age, height, weight, monthlyWeightLoss } = req.body

    const prompt =
      'I am a ' +
      age +
      ' years old ' +
      gender +
      '. My height in cm is ' +
      height +
      ' and weight in kg is ' +
      weight +
      '. Can you calculate my resting metabolism rate. For one kg weight loss you need to create a 7700 calories deficit. According to my monthly weight loss goal of ' +
      monthlyWeightLoss +
      'kg. How many calories should I eat daily? For these calories give me diet for sedentary and light acitivity lifestyle?'

    //console.log(prompt)
    const message: ChatCompletionRequestMessage = {
      role: 'user',
      content: prompt
    }

    const messages = [message]
    const apiKey = process.env.OPENAI_API_KEY
    const url = 'https://api.openai.com/v1/chat/completions'

    const body = JSON.stringify({
      messages,
      model: 'gpt-3.5-turbo',
      stream: false
    })

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`
        },
        body
      })
      const data = await response.json()
      //console.log("Inside API Data -> ",data.choices[0].message.content)
      res.status(200).json({ data })
    } catch (error) {
      console.log('we are in error.')
      res.status(500).json({ error }) //error.message })
    }

    //     // Return a response indicating the diet creation success or failure
    //     res.status(200).json({ success: true, message: 'Diet created successfully' });
    //   } else {
    //     res.status(405).json({ success: false, message: 'Method not allowed' });
    //   }
  }
}
