import { AuthService } from './../auth-services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html'
})
export class LoginFormComponent implements OnInit {

  constructor(private authService: AuthService) { }
  btnText!: string;
  isAuth: any
  ngOnInit(): void {
    this.changeBtnText();
  }
  changeBtnText(){
    this.authService.isLoggedIn().then((isAuth)=>{
      this.isAuth = isAuth;
      this.isAuth ? 
                this.btnText = "Выйти" : 
                this.btnText = "Войти";
    })
  }
  login(){
    this.authService.loginService();
    this.changeBtnText();
  }
  logout(){
    this.authService.logoutService();
    this.changeBtnText();
  }
}
