export interface ISubmitForm {
  name: string;
  address: string;
  phone: string;
  income: number;
  job: string;
  loan_type: ILoanType;
}

export interface ILoanType {
  [key: string]: number;
  personal: 0;
  mortgage: 1;
  business: 2;
  auto: 3;
}
