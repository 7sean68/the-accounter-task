import axios, { AxiosInstance } from "axios";

export default class BaseApi {
  private axiosInstance: AxiosInstance = axios.create();

  constructor(baseURL: string) {
    this.axiosInstance.defaults.baseURL = baseURL;
  }

  authorise(accessToken: string, onDeauthorised: VoidFunction) {
    this.axiosInstance.defaults.headers.common.Authorization = `Bearer ${accessToken}`

    axios.interceptors.response.use(
      (response) => response,
      async (error) => {
        if(error.response?.status === 401) {
          this.deauthorise();
          onDeauthorised();
        }
        throw error;
      }
    );
  }

  deauthorise() {
    delete this.axiosInstance.defaults.headers.common.Authorization;
  }

  getCancelTokenSource() {
    return axios.CancelToken.source();
  }

  get = this.axiosInstance.get;
  post = this.axiosInstance.post;
  delete = this.axiosInstance.delete;
  put = this.axiosInstance.put;
  patch = this.axiosInstance.patch;
}

export const defaultBaseApi = new BaseApi("https://web-dev-api.theaccounter.net/")
