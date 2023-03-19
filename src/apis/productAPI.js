import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://6412ef873b7106473759fe0f.mockapi.io/api/products',
});

const getListProduct = async () => {
  try {
    const response = await instance.get();
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export { getListProduct };
