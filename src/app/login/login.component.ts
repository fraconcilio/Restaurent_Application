import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private formbuilder: FormBuilder, private _http:HttpClient, private _router:Router ) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      email: [''],
      password: ['']
    });
  }

  logIn(){
    this._http.post<any>('http://localhost:8080/login',this.loginForm.value).subscribe(res=>{
      if(res.status == 200){
        alert('Login Successfully');
      }
      else if(res.status == 401){
        alert('Login Error');
      }
    }), (err: any)=>{
      console.log(err);
      alert('Request Error');
    }
  }
      
 }


