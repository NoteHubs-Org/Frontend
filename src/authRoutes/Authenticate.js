import { api } from "../utils/axios"

const authenticate = () => {
  try {
    const res = api.get("/");
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

export default authenticate;