import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

const X_PORTAL_TYPE = "CLIENT";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Portal-Type": X_PORTAL_TYPE,
  },
});

export const apiForServerSide = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "x-portal-type": X_PORTAL_TYPE,
  },
});

const onRequest = async (config: InternalAxiosRequestConfig) => {
  try {
    const res = await axios.get("/api/getToken");

    const token: any | undefined = res.data ? res.data.accessToken : undefined;

    config.headers["Authorization"] = `Bearer ${token || ""}`;
    config.headers["X-Authorization"] = `Bearer ${token || ""}`;
  } catch (e) {
    console.log(e);
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> => {
  console.error(`[request error] [${JSON.stringify(error)}]`);
  return Promise.reject(error);
};

const onResponse = (response: AxiosResponse): AxiosResponse => {
  // Do something with response data
  if (response.status === 201) {
    // Do something
  }

  if (response.status === 202) {
    // Do something
  }

  return response;
};

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  if (error.response && error.response.status === 401) {
    // Handle 401 error
  }
  if (error.response && error.response.status === 400) {
    // Handle 400 error
  }

  if (error.response && error.response.status === 500) {
    // Handle 500 error
  }

  return Promise.reject(error);
};

api.interceptors.response.use(onResponse, onResponseError);
api.interceptors.request.use(onRequest, onRequestError);

export default api;
