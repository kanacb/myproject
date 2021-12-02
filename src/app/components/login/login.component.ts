import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BehaviorSubject } from 'rxjs';
import { Formvalidations } from 'src/app/classes/formvalidations';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UsersService } from 'src/app/services/users.service';

export interface login {
  email: string;
  password: string;
}

export interface response {
  id: string;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends Formvalidations implements OnInit {
  email = 'eve.holt@reqres.in';
  password = 'pistol';

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(this.email, [Validators.required, Validators.email]),
    password: new FormControl(this.password, Validators.required),
  });

  constructor(
    private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) data: any,
    private userSvr: UsersService, private authSrv: AuthenticationService
  ) {
    super();
  }

  ngOnInit(): void {
    this.loginForm.get('email')?.valueChanges.subscribe((newemail) => {
      console.log(newemail);
    });
  }



  onSubmit() {
    console.log('form value', this.loginForm.value);
    this.userSvr.login(this.loginForm.value as login).subscribe({
      next: (results: response) => {
        console.log(results);
        alert('login success');
        this.authSrv.authState.next(true);
        this.onClose();
      },
      error: (error) => {
        console.error(error);
        alert('login unsuccessful! ');
      },
      complete: () => console.info('login complete'),
    });
  }

  onClose() {
    this.dialogRef.close();
  }
}
