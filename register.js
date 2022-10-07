window.onload = pageLoad;
function pageLoad(){
    var form = document.getElementById("myForm");
	form.onsubmit = validateForm;
}

function validateForm() {
    //ถ้าตรวจสอบแล้วว่ามีการ register ไม่ถูกต้องให้ return false ด้วย
     
     var pass = document.getElementById("password");
     var con_pass = document.getElementById("confirm_password");
        if (pass.value == con_pass.value) {
         
            alert("Yayyy!! correct, That's cool >_<"); 
        } 
        else{
            document.getElementById("errormsg").innerHTML ="Error";
            alert("Oops! your password incorrect, try again, darilng :c"); 
            return false;
        }
}
