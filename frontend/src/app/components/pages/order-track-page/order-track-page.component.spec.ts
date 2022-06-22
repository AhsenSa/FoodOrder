import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/shared/models/Order';

import { OrderTrackPageComponent } from './order-track-page.component';

describe('OrderTrackPageComponent', () => {
  let component: OrderTrackPageComponent;
  let fixture: ComponentFixture<OrderTrackPageComponent>;

  let mockOrderService: Partial<OrderService>;

  beforeEach(async () => {
    mockOrderService = {
      trackOrderById: (id) => {
        return of(new Order())
      }
    };

    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ OrderTrackPageComponent ],
      providers: [
        {providers: OrderService, useValue: mockOrderService}
      ]
    })
    .compileComponents();

    TestBed.inject(OrderService);

    fixture = TestBed.createComponent(OrderTrackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /*it('should create', () => {
    expect(component).toBeTruthy();
  });*/




});

