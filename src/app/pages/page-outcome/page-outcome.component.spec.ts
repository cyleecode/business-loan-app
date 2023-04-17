import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOutcomeComponent } from './page-outcome.component';

describe('PageOutcomeComponent', () => {
  let component: PageOutcomeComponent;
  let fixture: ComponentFixture<PageOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageOutcomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
