import { TestBed } from '@angular/core/testing';
import{ HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { LoginPageComponent } from '../components/pages/login-page/login-page.component';
import { ToastrModule } from 'ngx-toastr';
import { USER_LOGIN_URL } from '../shared/constants/urls';

describe('UserService', () => {
  let userService: UserService;
  let http: HttpClient;
  let httpController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastrModule.forRoot()],
      providers: [UserService],
    });
    userService = TestBed.inject(UserService);
    http = TestBed.inject(HttpClient);
    httpController = TestBed.inject(HttpTestingController);
  });

  /*it('should be created', () => {
    expect(userService).toBeDefined();
  });*/

  it('login api', () => {
    const testData = true;
    const inputData = {
      email: 'admin',
      password: 'admin',
    };

    userService
    .login(inputData).subscribe(
      () => {

    });

    const req = httpController.expectOne(USER_LOGIN_URL);
    expect(req.request.method).toEqual('POST');
    req.flush(testData);


    });

});
