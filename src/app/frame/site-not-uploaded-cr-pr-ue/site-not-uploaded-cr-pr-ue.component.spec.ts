import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteNotUploadedCrPrUeComponent } from './site-not-uploaded-cr-pr-ue.component';

describe('SiteNotUploadedCrPrUeComponent', () => {
  let component: SiteNotUploadedCrPrUeComponent;
  let fixture: ComponentFixture<SiteNotUploadedCrPrUeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteNotUploadedCrPrUeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteNotUploadedCrPrUeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
