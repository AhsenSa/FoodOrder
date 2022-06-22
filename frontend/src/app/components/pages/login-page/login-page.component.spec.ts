import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user.service';

import { LoginPageComponent } from './login-page.component';

class MockUserService {

}

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [ LoginPageComponent ],
      providers: [
        {provide: UserService, useClass: MockUserService}
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(LoginPageComponent);

      component = fixture.componentInstance;

      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;

    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  /*it("should disable the button when textArea is empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });*/


  /*it('should log in a user and redirect', function(){

 });*/

 it(`should have as text 'Login'`, () => {
  const activatedRoute = fixture.debugElement.injector.get(ActivatedRoute);

  activatedRoute.snapshot.queryParams = {returnUrl: 'Login'};
  component.ngOnInit();

  expect(component.returnUrl).toEqual(`Login`);
 });

 it(`should set isSubmitted to true`, () => {
  component.submit();
  expect(component.isSubmitted).toBeTrue();
 });

 /*it(`form should be invalid`, async(() => {
  component.loginForm.controls['email'].setValue('');
  component.loginForm.controls['name'].setValue('');
  component.loginForm.controls['password'].setValue('');
  expect(component.loginForm.valid).toBeFalsy();
 }));*/

 /*it(`should have one user`, async(() => {
  // ?????
  expect(component.users.lentgh).toEqual(1);
 }));*/

 /* ?????
 it(`html should render one user`, async(() => {
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector('p');
  expect(el.innerText).toContain('user1');
 }));
*/

/* ????
 it(`undefined inputs, show default title`, (): void => {
  fixture.detectChanges();

  const cssSelector: string = 'div span';
  const element: HTMLSpanElement = fixture.nativeElement.querySelector(cssSelector);
  const expected: string = 'No Title';
  const actual: string = element.innerHTML.trim();
  expect(actual).toBe(expected);
 });
 */

 /* ????????
 it('someBoolean true, click right button, event is "right"', (): void => {
  component.someBoolean = true;
  component.showComponent = true;
  fixture.detectChanges();

  const cssSelector: string = 'div button';
  const button: HTMLButtonElement = fixture.nativeElement.querySelectorAll(cssSelector)[1];
  button.click();
  fixture.detectChanges();

  const expected: string = 'right';
  const actual: string = component.buttonEvent;
  expect(actual).toBe(expected);
});
*/

/* ?????????
it('default inputs, try click right button, event is ""', (): void => {
  component.showComponent = true;
  fixture.detectChanges();

  const cssSelector: string = 'div button';
  const button: HTMLButtonElement = fixture.nativeElement.querySelectorAll(cssSelector)[1];
  button.click();
  fixture.detectChanges();

  const expected: string = '';
  const actual: string = component.buttonEvent;
  expect(actual).toBe(expected);
});
*/

});
