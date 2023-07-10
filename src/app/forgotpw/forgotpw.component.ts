
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import { LoginService } from '../login.service';



@Component({
  selector: 'app-forgotpw',
  templateUrl: './forgotpw.component.html',
  styleUrls: ['./forgotpw.component.css']
})
export class ForgotpwComponent implements OnInit{
  Forgotpw=new FormGroup({
    emailid:new FormControl(),
    password:new FormControl(),
    confirmpassword:new FormControl()
  });
  msg:string=""
  constructor(public ls:LoginService) { }

  ngOnInit(): void {
  }
  Forgot() {
    let forgotpwd = this.Forgotpw.value;
    console.log(this.Forgotpw.get("confirmpassword")?.value);
    if(this.Forgotpw.get("confirmpassword")?.value==this.Forgotpw.get("password")?.value){
    this.ls.forgot(forgotpwd).subscribe({
      next:(result:any)=>this.msg=result,
      error:(error:any)=>this.msg="This emailid does not exist",
      complete:()=>console.log("completed")
    })
  }
  else{
    console.log("Password mismatch");
    this.msg="Password mismatch";
  }
    //  console.log(forgotpwd);
  }
}

  //   function resetForm()
  //  {
  //          var oldP=document.getElementById("").value="";
  //          var newP=document.getElementById("").value="";
  //          var confirmP =document.getElementById("confirmP").value="";
  //  }
  //    function checkForm()
  //    {
  //     var oldP=document.getElementById("oldP").value;
  //     var newP=document.getElementById("newP").value;
  //     var confirmP =document.getElementById("confirmP").value;

  //   if(oldP!=""&&newP!=""&&confirmP!="")
  //   {
  //     if(oldP!=newP)
  //     {
  //         if(newP==confirmP)
  //           {
  //           return true;
  //         }
  //          else
  //           {
  //             alert("Confirm password is not same as you new password.");
  //             return false;
            
  //           }
  //       }
  //       else
  //      {
  //       alert(" This Is Your Old Password,Please Provide A New Password");
  //       return false;
  //      }
  //     }
  //   else
  //     {
  //      alert("All Fields Are Required");
  //      return false;
  //     }
  //  }
  //  }
