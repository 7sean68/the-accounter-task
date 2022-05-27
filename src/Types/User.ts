import { Company } from "./Company";

export default interface User {
  id: number;
  username: string;
  email: string;
  email_verified: true;
  mobile: string;
  mobile_verified: true;
  first_name: string;
  last_name: string;
  company: number;
  companies: Company[];
  should_reset_password: boolean;
}

export interface LoginResponse extends User {
  access_token: string;
}
