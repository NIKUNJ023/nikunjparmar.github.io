emailjs.init("mYDJFs7O3nSUsqJ-W")

const form = document.getElementById("mail");
const status = document.getElementById("status");
const btn = document.getElementById("btn");

form.addEventListener("submit", function(e){
    e.preventDefault();

    btn.disabled = true;
    btn.innerHTML = "Sending...";

    emailjs.sendForm("service_mqr9urs", "template_qixpxja", this)
        .then(()=>{
            status.innerHTML="✅ Message Sent!"
            status.style.color="green"
            form.reset();
        })

        .catch((error) => {
            status.innerHTML="❌ Failed to send. Try again!"
            status.style.color="red"
            console.error("EmailJS error:", error)
        })

        .finally(()=>{
            btn.disabled= false
            btn.innerHTML="Send"
        })
})