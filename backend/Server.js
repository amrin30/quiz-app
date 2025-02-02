

import express from "express"
import cors from "cors"
import fetch from "node-fetch"

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())

app.get("/api/quiz", async (req, res) => {
  try {
    const response = await fetch("https://api.jsonserve.com/Uw5CrX")
    if (!response.ok) {
      throw new Error("Failed to fetch quiz data from external API")
    }
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error("Error fetching quiz data:", error)
    res.status(500).json({ error: "Failed to fetch quiz data" })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


