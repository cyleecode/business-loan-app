export interface ISubmitForm {
  firstname: string;
  lastname: string;
  company: string;
  address: string;
  phone: string;
  income: number;
  job: string;
  loan_type: keyof ILoanType;
  loan_amount: number;
  balance_sheet: IBalanceSheet[];
}

export interface IBalanceSheet {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}

export interface ILoanType {
  [key: string]: number;
  personal: 0;
  mortgage: 1;
  business: 2;
  auto: 3;
}
