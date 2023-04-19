import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISubmitForm } from 'src/app/interfaces/isubmit-form';

@Component({
  selector: 'app-page-application',
  templateUrl: './page-application.component.html',
  styleUrls: ['./page-application.component.scss'],
})
export class PageApplicationComponent implements OnInit {
  applicationId!: string | null;
  form: ISubmitForm = {} as ISubmitForm;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.applicationId = this.route.snapshot.paramMap.get('appid');
  }
}
