import { Token } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router, public loginService: LoginService,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        senha: ['', [Validators.required]]
      }
    );
  }

  submitLogin() {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;

    // this.loginService.LoginUsuario(dadosLogin)
    //   .subscribe(
    //     token => {
    //       debugger
    //       var nossoToken = token
    //     },
    //     erro => {

    //     })

    this.router.navigate(["/noticias"]);


  }

}
