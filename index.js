function Login() 
{
   let Username = document.getElementById("Username").value;
   let Password = document.getElementById("Password").value;
     
    if(Username == "Entri Elevate" &&  Password == "admin123")
    {   
        alert(`Login Successful`)
    }
     else{
         
         alert(`Invalid Username or Password And Try Again Later`)
     }
    
}
function forgotpass()
{
     let forgetpass = prompt('Enter your email');
     
     alert(`verification code is send your email`)
     
}