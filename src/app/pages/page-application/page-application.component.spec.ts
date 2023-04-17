import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageApplicationComponent } from './page-application.component';

describe('PageApplicationComponent', () => {
  let component: PageApplicationComponent;
  let fixture: ComponentFixture<PageApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageApplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
