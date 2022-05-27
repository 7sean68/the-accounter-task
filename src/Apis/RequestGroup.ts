import { LoginResponse } from "../Types/User";
import { defaultBaseApi } from "./BaseApi";

class RequestGroup {
  cancelTokenSource = defaultBaseApi.getCancelTokenSource();
  
  cancelAndReuse(cancelReason: string) {
    this.cancelTokenSource.cancel(cancelReason);
    this.cancelTokenSource = defaultBaseApi.getCancelTokenSource();
  }

  async postUserLogin(contact: string, password: string) {
    const { data } = await defaultBaseApi.post<LoginResponse>("user-management/login/", {
      contact,
      password,
    }, {
      cancelToken: this.cancelTokenSource.token
    });
    return data;
  }

  async getCurrencyList(companyId: number) {
    const { data } = await defaultBaseApi.get(`base/currency/${companyId}`, {
      cancelToken: this.cancelTokenSource.token,
    });
    return data;
  }
}

export default RequestGroup;