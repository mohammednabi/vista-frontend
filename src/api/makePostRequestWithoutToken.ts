import axios from "axios";

export const makePostRequestWithoutToken = async (
  fieldData: any,
  endpoint: string,
  additionalHeaders?: any,
  baseURL: string = import.meta.env.VITE_SERVER_API
) => {
  try {
    const response = await axios.post(`${baseURL}${endpoint}`, fieldData, {
      headers: {
        "Content-Type": "application/json",

        ...additionalHeaders,
      },
      withCredentials: true,
    });

    // return response
    const data = await response.data;

    // console.log(data);

    return data;
  } catch (error) {
    console.error("Error making POST without token request:", error);
    throw error; // Handle or rethrow the error based on your needs
  }
};
