const form=document.getElementById("details");
const submit=document.getElementById("btn");

submit.addEventListener('click',function(){
    const phoneno=form.querySelector('#number').value;
    const email=form.querySelector('#email').value;
    const initial=form.querySelector("#phoneno").value;
    console.log(phoneno, email);
    
    if(!validatePhno(phoneno))
   {
       alert("Invalid number");
       return;
   }
   
   else if(!validateEmail(email))
    {
        alert("Please enter correct email");
        return;
    }
    else{
        const redirectURL=`ThankYou.html?phoneno=${phoneno}&email=${email}&initial=${initial}`;
        window.location.href=redirectURL;
    }
        
    
});

function validateEmail(email){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function validatePhno(pn){
    const phonenum=/^\d{10}$/;
    return phonenum.test(pn);
}