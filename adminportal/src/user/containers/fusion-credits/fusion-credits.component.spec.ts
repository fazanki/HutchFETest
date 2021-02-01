import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FusionCreditsComponent } from './fusion-credits.component';

describe('FusionCreditsComponent', () => {
  let component: FusionCreditsComponent;
  let fixture: ComponentFixture<FusionCreditsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FusionCreditsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FusionCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
