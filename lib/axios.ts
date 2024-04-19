import axios, { AxiosResponse } from "axios";

const PUBLIC_API_ENDPOINT = process.env["NEXT_PUBLIC_API_ENDPOINT"];
const PUBLIC_BEARER_TOKEN = process.env["NEXT_PUBLIC_BEARER_TOKEN"];

const request = axios.create({
  baseURL: PUBLIC_API_ENDPOINT,
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${PUBLIC_BEARER_TOKEN}`,
  },
});

export function getData<T>(response: AxiosResponse<T>): T {
  return response.data;
}

export default request;
