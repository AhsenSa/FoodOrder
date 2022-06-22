import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartPageComponent } from './cart-page.component';
import { ToastrModule } from 'ngx-toastr';
import { OrderService } from 'src/app/services/order.service';
import { User } from 'src/app/shared/models/User';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

class MockUserService {
  currentUser = new User();
}

class MockOrderService{
}


describe('CartPageComponent', () => {
  let component: CartPageComponent;
  let fixture: ComponentFixture<CartPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        ReactiveFormsModule,
        ToastrModule.forRoot()
      ],
      declarations: [ CartPageComponent ],
      providers: [
        {provide: UserService, useClass: MockUserService},
        {provide: OrderService, useClass: MockOrderService},
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
