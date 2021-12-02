import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginComponent } from 'src/app/components/login/login.component';
import { RegisterComponent } from 'src/app/components/register/register.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onLogin() {
    this.openDialog();
  }

  onRegister() {
    this.openDialog('register');
  }

  openDialog(comp: string = 'login') {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;

    const dialogRef =
      comp == 'register'
        ? this.dialog.open(RegisterComponent, dialogConfig)
        : this.dialog.open(LoginComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Register Dialog:', result);
    });
  }
}
