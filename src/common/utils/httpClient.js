import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://www.tabnews.com.br/api/v1"
})