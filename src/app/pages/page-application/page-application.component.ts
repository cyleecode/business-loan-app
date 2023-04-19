import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BackendService } from 'src/app/api/backend.service';
import { IBalanceSheet } from 'src/app/interfaces/iapi-balance-sheet';
import { ILoanType, ISubmitForm } from 'src/app/interfaces/isubmit-form';

@Component({
  selector: 'app-page-application',
  templateUrl: './page-application.component.html',
  styleUrls: ['./page-application.component.scss'],
})
export class PageApplicationComponent implements OnInit {
  applicationId!: string | null;
  form: ISubmitForm = {} as ISubmitForm;
  providerList = ['Xero', 'MYOB'];
  loanType: keyof ILoanType = 'business';
  balanceSheet: IBalanceSheet[] = [];
  loanTypeList: Array<keyof ILoanType> = [
    'auto',
    'business',
    'mortgage',
    'personal',
  ];
  isRequesting = false;
  constructor(private route: ActivatedRoute, private api: BackendService) {}
  ngOnInit(): void {
    this.applicationId = this.route.snapshot.paramMap.get('appid');
    this.requestBalance();
  }

  requestBalance() {
    this.isRequesting = true;
    this.api.getBalanceSheet(this.form).subscribe(
      (v) => {
        console.log(v);
        this.isRequesting = false;
        this.balanceSheet = [...v.data];
      },
      (err) => {
        console.error(err);
        this.isRequesting = false;
      }
    );
  }
}
