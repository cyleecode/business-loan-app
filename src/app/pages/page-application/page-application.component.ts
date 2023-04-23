import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { BackendService } from 'src/app/api/backend.service';
import { FormReviewComponent } from 'src/app/components/form-review/form-review.component';
import { IBalanceSheet } from 'src/app/interfaces/iapi-balance-sheet';
import { ISubmitApplication } from 'src/app/interfaces/isubmit-application';
import { ILoanType, ISubmitForm } from 'src/app/interfaces/isubmit-form';

interface IAppEvent {
  event: 'request' | 'review' | 'submit' | 'cancel' | 'result';
}

@Component({
  selector: 'app-page-application',
  templateUrl: './page-application.component.html',
  styleUrls: ['./page-application.component.scss'],
})
export class PageApplicationComponent implements OnInit {
  applicationId!: string | null;
  form: ISubmitForm = {} as ISubmitForm;
  result: ISubmitApplication = {} as ISubmitApplication;

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

  applicationEvent = new Subject<IAppEvent>();
  constructor(
    private route: ActivatedRoute,
    private api: BackendService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.applicationEvent.subscribe((target) => {
      switch (target.event) {
        case 'cancel':
          this.isRequesting = false;
          break;
        case 'request':
          this.requestBalance();
          break;
        case 'review':
          this.reviewForm();
          break;
        case 'submit':
          this.submitForm();
          break;
        case 'result':
          this.goToPageOutcome();
          break;
        default:
          this.isRequesting = false;
      }
    });
  }
  ngOnInit(): void {
    this.applicationId = this.route.snapshot.paramMap.get('appid');
  }
  buttonRequest() {
    this.isRequesting = true;
    this.applicationEvent.next({ event: 'request' });
  }

  requestBalance() {
    this.api.getBalanceSheet(this.form).subscribe(
      (v) => {
        this.isRequesting = false;
        this.balanceSheet = [...v.data];
        this.form.balance_sheet = this.balanceSheet;
        this.applicationEvent.next({ event: 'review' });
      },
      (err) => {
        console.error(err);
      }
    );
  }

  reviewForm() {
    const d = this.dialog.open<any, ISubmitForm>(FormReviewComponent, {
      data: this.form,
      autoFocus: false,
    });
    d.afterClosed().subscribe((action) => {
      if (action) {
        this.applicationEvent.next({ event: 'submit' });
      }
    });
  }

  submitForm() {
    this.api.submitApplication(this.form).subscribe((result) => {
      console.log(result);
      if (result.status) {
        this.result = result;
        this.applicationEvent.next({ event: 'result' });
      }
    });
  }

  goToPageOutcome() {
    this.router.navigate(['outcome', { result: JSON.stringify(this.result) }]);
  }
}
