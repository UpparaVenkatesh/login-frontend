import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginRef = new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    typeOfUser:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService,public router:Router) { }

  ngOnInit(): void {
  }

  signIn(){
    let login = this.loginRef.value;
    console.log(login);
    this.ls.signIn(login).subscribe({
      next:(result:any)=>{
        console.log(result);
        if(result["typeofuser"]=="admin"){
            sessionStorage.setItem("userDetails",login.emailid);
            this.router.navigate(["adminHome"])
        }else if(result["typeofuser"]=="user"){
          sessionStorage.setItem("userDetails",login.emailid);
          this.router.navigate(["userHome"])
        }else {
            this.msg="Check the input again";
        }
      },
      error:(error:any)=>{console.log(error)
        this.msg="Invalid credientials"
      complete:()=>console.log("completed")
      }
    })
  }
}