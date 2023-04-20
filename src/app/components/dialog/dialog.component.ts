import { ComponentPortal } from '@angular/cdk/portal';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface IDialog {
  componentPortal: ComponentPortal<any>;
}

export interface IDialogAction {
  action: 'ok' | 'cancel' | 'submit';
  data?: {};
}

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  componentPortal!: ComponentPortal<any>;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IDialog,
    private dialog: MatDialogRef<DialogComponent, IDialogAction>
  ) {
    this.componentPortal = data.componentPortal;
  }

  close() {
    this.dialog.close({
      action: 'cancel',
    });
  }
}
