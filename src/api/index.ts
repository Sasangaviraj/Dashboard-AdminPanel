import axios from "axios";
import { BASE_URL } from "./url";

export const HttpMethod = {
  GET :'GET',
  POST:'POST',
  PUT:'PUT',
  DELETE:'DELETE'
}

const API = axios.create({
  baseURL: BASE_URL,
  headers:{
    "Content-Type":"application/json"
  }
});

const serverApi = <R,D=unknown>(
  path: string,
  token?: string,
  method?: string,
  data?: D
):Promise<R> => {
  return new Promise((resolve, reject) => {
    API.request({
      url: `${path}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: method ? method : HttpMethod.GET,
      data,
    })
      .then((res) => resolve(res.data))
      .catch((e) => reject(e));
  });
};

export default serverApi;
