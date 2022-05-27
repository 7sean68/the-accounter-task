export default interface Currency {
  id: number;
  flag: string;
  name: string;
  code: string
  unit: string
  sub_unit: string;
  symbol: string;
  active: boolean
  erp_id: number
};
