import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-outcome',
  templateUrl: './page-outcome.component.html',
  styleUrls: ['./page-outcome.component.scss'],
})
export class PageOutcomeComponent implements OnInit {
  submissionResult!: string;
  pending: boolean = true;
  isSuccess: boolean | undefined;
  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.submissionResult = this.route.snapshot.paramMap.get('result') || '';
    try {
      this.isSuccess = JSON.parse(this.submissionResult).data;
    } catch (err) {}
    this.pending = false;
  }
}
