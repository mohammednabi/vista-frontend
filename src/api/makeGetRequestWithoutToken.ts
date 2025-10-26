import axios from "axios";

export const makeGetRequestWithoutToken = async (
  endpoint: any,
  params?: any,
  baseURL = import.meta.env.VITE_SERVER_API
) => {
  const url = new URL(`${baseURL}${endpoint}`);

  try {
    const response = await axios.get(url.toString(), {
      headers: {
        "Content-Type": "application/json",
      },
      params: params,
    });

    // return response
    const data = await response.data;

    return data;
  } catch (error) {
    console.error("Error making GET without token request:", error);
    throw error;
  }
};
