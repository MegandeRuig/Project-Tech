/* 

Form switch function onclick
---------------------------
(Progressive Enhancement) 

*/

/* Function hides the register form when user first comes 
to the page so only the loginform is shown */

function onloadStyle() {
    const registerform = document.getElementById("register");
    registerform.classList.add("hideRegister");
  
    const loginform = document.getElementById("login");
    loginform.classList.add("showLogin");
  }
  
  onloadStyle();
  
  /* Function hides Loginform and shows Registerform when user clicks 
  on register button at the bottom of loginform */
  
  document.getElementById("signupButton").addEventListener("click", registerappear);
  
  function registerappear() {
    const registerform = document.getElementById("register");
    registerform.classList.add("showRegister");
    registerform.classList.remove("hideRegister");
  
    const loginform = document.getElementById("login");
    loginform.classList.add("hideLogin");
    loginform.classList.remove("showLogin");
  }
  
  /* Function hides Registerform and shows Loginform when user clicks 
  on login button at the bottom of registerform */
  
  document.getElementById("loginButton").addEventListener("click", loginappear);
  
  function loginappear() {
    const registerform = document.getElementById("register");
    registerform.classList.add("hideRegister");
    registerform.classList.remove("showRegister");
  
    const loginform = document.getElementById("login");
    loginform.classList.add("showLogin");
    registerform.classList.remove("hideLogin");
  }
  
  