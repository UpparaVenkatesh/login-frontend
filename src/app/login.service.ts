import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseURL:string ="https://gck22ycb2e.execute-api.ap-south-1.amazonaws.com/dev";
  constructor(public http:HttpClient) { }

  signIn(login:any):Observable<Login> {
    return this.http.post<Login>("https://8b86sm0d66.execute-api.ap-south-1.amazonaws.com/dev/mylogin",login);
  }


  
  signUp(login:any):Observable<string> {
    return this.http.post<string>(this.baseURL+"/aviation",login);
  }

  forgot(forgotpwd:any):Observable<string>{
       console.log(forgotpwd)
    return this.http.post<string>("https://8b86sm0d66.execute-api.ap-south-1.amazonaws.com/dev/forgot",forgotpwd);
  }
}