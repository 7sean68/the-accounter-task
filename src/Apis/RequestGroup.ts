import Currency from "../Types/Currency";
import { LoginBody, LoginResponse } from "../Types/User";
import { defaultBaseApi } from "./BaseApi";

class RequestGroup {
  cancelTokenSource = defaultBaseApi.getCancelTokenSource();
  
  cancelAndReuse(cancelReason: string) {
    this.cancelTokenSource.cancel(cancelReason);
    this.cancelTokenSource = defaultBaseApi.getCancelTokenSource();
  }

  async postUserLogin(body: LoginBody) {
    const { data } = await defaultBaseApi.post<LoginResponse>("user-management/login/", body, {
      cancelToken: this.cancelTokenSource.token
    });
    return data;
  }

  async getCurrencyList(companyId: number) {
    const { data } = await defaultBaseApi.get<Currency[]>(`base/currency/${companyId}`, {
      cancelToken: this.cancelTokenSource.token,
    });
    return data;
  }
}

export default RequestGroup;