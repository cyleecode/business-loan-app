export interface IBalanceSheet {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}
export interface IApiBalanceSheet {
  status: boolean;
  sheet: IBalanceSheet[];
}
