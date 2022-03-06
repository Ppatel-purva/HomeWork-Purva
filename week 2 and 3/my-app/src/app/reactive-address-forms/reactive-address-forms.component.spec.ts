import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveAddressFormsComponent } from './reactive-address-forms.component';

describe('ReactiveAddressFormsComponent', () => {
  let component: ReactiveAddressFormsComponent;
  let fixture: ComponentFixture<ReactiveAddressFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveAddressFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveAddressFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
