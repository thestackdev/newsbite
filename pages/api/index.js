import axios from 'axios'
import cache from 'memory-cache'

import { BASE_URL, API_KEY, SIX_HOURS } from 'utils/constants'

export default async function (req, res) {
  const { category } = req.query

  let URL = `${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}&pageSize=100`
  if (category) URL = URL.concat(`&category=${category}`)

  try {
    const cached = cache.get(URL)
    if (cached) res.send(cached)
    else {
      const response = await axios.get(URL)
      cache.put(URL, response.data, SIX_HOURS)
      res.send(response.data)
    }
  } catch (error) {
    console.log(error)
    res.send({ message: 'Something went wrong' })
  }
}
