import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let de: DebugElement;
  let el: HTMLElement;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
      declarations: [ LoginPageComponent ]
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

  it('should create Quote component', () => {
    expect(component).toBeTruthy();
  });

  it("should disable the button when textArea is empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeTruthy();
  });
  it("should enable button when textArea is not empty", () => {
    fixture.detectChanges();
    const button = fixture.debugElement.query(By.css("button"));
    expect(button.nativeElement.disabled).toBeFalsy();
  });

  it('should log in a user and redirect', function(){

 });

 it(`should have as text 'Login'`, async(() => {
  expect(component.returnUrl).toEqual(`Login`);
 }));

 it(`should set submitted to true`, async(() => {
  component.onSubmit();
  expect(component.submitted).toBeTruthy();
 }));

 it(`form should be invalid`, async(() => {
  component.contacForm.controls['email'].setValue('');
  component.contacForm.controls['name'].setValue('');
  component.contacForm.controls['password'].setValue('');
  expect(component.contactForm.valid).toBeFalsy();
 }));

 it(`should have one user`, async(() => {
  expect(component.users.lentgh).toEqual(1);
 }));

 it(`html should render one user`, async(() => {
  fixture.detectChanges();
  const el = fixture.nativeElement.querySelector('p');
  expect(el.innerText).toContain('user1');
 }));

 it(`undefined inputs, show default title`, (): void => {
  component.showComponent = true;

  fixture.detectChanges();

  const cssSelector: string = 'div span';
  const element: HTMLSpanElement = fixture.nativeElement.querySelector(cssSelector);
  const expected: string = 'No Title';
  const actual: string = element.innerHTML.trim();
  expect(actual).toBe(expected);
 });
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




});


