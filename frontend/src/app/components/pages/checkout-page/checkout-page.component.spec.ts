import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { UserService } from 'src/app/services/user.service';

import { CheckoutPageComponent } from './checkout-page.component';
import { User } from 'src/app/shared/models/User';

class MockUserService {
  currentUser = new User();
}

class MockOrderService{
}

describe('CheckoutPageComponent', () => {
  let component: CheckoutPageComponent;
  let fixture: ComponentFixture<CheckoutPageComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(), 
      ],
      declarations: [ CheckoutPageComponent ],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: OrderService, useClass: MockOrderService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    h1 = fixture.nativeElement.querySelector('h1');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a car selected', () => {
    //assertions
    expect(component.createOrder).toBeTruthy();
});




});
