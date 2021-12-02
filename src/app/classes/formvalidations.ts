

export class Formvalidations {

  getEmailValid(loginForm: any){
    return this.getFieldRequired(loginForm, 'email');
  }

  getPasswordValid(loginForm: any){
    return this.getFieldRequired(loginForm);
  }

  getFieldRequired(loginForm: any, field: string = 'password'){
    if(loginForm.controls[field].pristine) return false;
    if (loginForm.controls[field].hasError('required')) {
      if(loginForm.controls[field].dirty) return true
      return true
    }
    return false;
  }

  getIsEmailValid(loginForm: any){
    return loginForm.controls['email'].hasError('valid')
  }

}
