import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferReceiptsComponent } from './offer-receipts.component';

describe('OfferReceiptsComponent', () => {
  let component: OfferReceiptsComponent;
  let fixture: ComponentFixture<OfferReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
