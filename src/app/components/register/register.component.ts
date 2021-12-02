import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Formvalidations } from 'src/app/classes/formvalidations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends Formvalidations implements OnInit {
  registerForm: FormGroup = new FormGroup({
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("",Validators.required)
  });

  constructor(private dialogRef: MatDialogRef<RegisterComponent>,@Inject(MAT_DIALOG_DATA) data:any) {
    super();
  }

  ngOnInit(): void {
  }

  onClose(){
    this.dialogRef.close();
  }

}
