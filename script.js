let captchaVerified = false; 

function timestamp() { 
    var response = document.getElementById("g-recaptcha-response"); 
    if (response == null || response.value.trim() == "") {
        var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);
        elems["ts"] = JSON.stringify(new Date().getTime());
        document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems);
     } } 
setInterval(timestamp, 500); 

function captchaSuccess() {
    captchaVerified = true;
}

function onSubmit(event) {
    if (captchaVerified){
        //let submission
    } else {
        alert("Kindly mark the capcha box before submission!!");
        event.preventDefault();
    }
}
