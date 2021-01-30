import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IapReceptsComponent } from './iap-recepts.component';

describe('IapReceptsComponent', () => {
  let component: IapReceptsComponent;
  let fixture: ComponentFixture<IapReceptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IapReceptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IapReceptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
