import { HttpParams } from '@angular/common/http';
import { Component, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/api/backend.service';

@Component({
  selector: 'app-page-landing',
  templateUrl: './page-landing.component.html',
  styleUrls: ['./page-landing.component.scss'],
})
export class PageLandingComponent {
  constructor(private route: Router, private api: BackendService) {}
  async start() {
    if (isDevMode()) {
      this.route.navigate([`application`, { appid: 'test' }]);
    } else {
      this.api.getStart().subscribe(
        (v) => {
          if (v.status) {
            const appid = v.data;
            this.route.navigate([`application`, { appid: appid }]);
          }
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
}
