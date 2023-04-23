import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ISubmitForm } from 'src/app/interfaces/isubmit-form';

@Component({
  selector: 'app-form-review',
  templateUrl: './form-review.component.html',
  styleUrls: ['./form-review.component.scss'],
})
export class FormReviewComponent {
  form: ISubmitForm = {} as ISubmitForm;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ISubmitForm,
    private dialog: MatDialogRef<FormReviewComponent>,
  ) {
    this.form = data;
  }

  isPositive(n: number) {
    return n > 0;
  }

  submit() {
    this.dialog.close(true);
  }
}
