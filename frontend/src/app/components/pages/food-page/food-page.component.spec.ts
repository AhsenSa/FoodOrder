import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FoodService } from 'src/app/services/food.service';

import { FoodPageComponent } from './food-page.component';

class MockFoodService {

}

describe('FoodPageComponent', () => {
  let component: FoodPageComponent;
  let fixture: ComponentFixture<FoodPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ FoodPageComponent ],
      providers: [
        {provide: FoodService, useClass: MockFoodService}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

