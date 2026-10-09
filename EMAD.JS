document.getElementById('rr').onclick = function() {
let emiail = document.querySelector('input[type = "text"]').ariaValueMax;
if (email == "") {
    alert("نرحبا بك ادخل الايميل اول");
}
else {
    alert("مرحب بيك"+ email + "تم تسجيل الدخول بنجاح");
}

}
console.log("الموقع شغال فل الف");

emailjs.init("YOUR_PUBLIC_KEY"); // بتلقاهو في الموقع

  // اول ما الصفحة تفتح يرسل ليك
  window.onload = function() {
    // عشان ما يرسل ليك انت كل مرة تفتح موقعك
    if (localStorage.getItem('visited')) return;

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      message: "زول جديد دخل موقع BRED!",
      time: new Date().toLocaleString(),
      page: window.location.href,
      userAgent: navigator.userAgent
    }).then(() => {
       console.log("تم الارسال");
      localStorage.setItem('visited', 'true');
    });
  }