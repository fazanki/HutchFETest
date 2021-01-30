import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FtueComponent } from './ftue.component';

describe('FtueComponent', () => {
  let component: FtueComponent;
  let fixture: ComponentFixture<FtueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FtueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FtueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
