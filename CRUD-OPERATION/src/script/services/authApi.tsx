import { IRegisForm, ILoginForm } from "../../interfaces/form";
import { baseUrl, urlListUsers } from "../constants/url";
import axios, {AxiosError} from 'axios'
const customAxios = (baseUrl: string) => {
  const api = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.response.use(
    (response) => response, // Giữ nguyên khi thành công
    (error: AxiosError) => {
      if (error.response) {
        const { status } = error.response;
        if (status === 400) {
          throw new Error('Email or password is in valid');
        }
      }
      return Promise.reject(error); // Ném lỗi khác nếu không phải 400
    }
  );
  return api
}

const apiProduct = customAxios(baseUrl)


export const getData = async (url: string) => {
  try {
    const response = await apiProduct.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

export const postData = async (url: string, data: IRegisForm | ILoginForm) => {
  const response = await apiProduct.post(url, data); 
  return response.data;
};


export const deleteData = async (id: string) => {
  return await apiProduct.delete(`${urlListUsers}/${id}`);
};

