import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  profileForm!:FormGroup
  isSubmitted = false;

  returnUrl = '';

  constructor(private formBuilder:FormBuilder,
    private userService:UserService,
    private activatedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name:['', Validators.required],
      address:['', Validators.required],
      currentPassword:['', Validators.required],
      newPassword:['', Validators.required],
      confirmPassword:['', Validators.required]
    });
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;

  }

  get fc(){
    return this.profileForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.profileForm.invalid) return;

    if(this.fc.confirmPassword.value !== this.fc.newPassword.value) return;

    this.userService.profile({name:this.fc.name.value,
      newPassword: this.fc.newPassword.value, address: this.fc.address.value,
      currentPassword: this.fc.currentPassword.value, email: this.userService.currentUser.email,
    confirmPassword: this.fc.confirmPassword.value}).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      });
  }

}
