// a biblioteca axios vai conectar o frontend e o backend
import axios from "axios"

export const server = axios.create({
  baseURL: "http://localhost:3333",
})
