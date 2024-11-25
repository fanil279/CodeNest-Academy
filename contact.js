//Form Validation
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const form = document.querySelector("form");

const fname_error = document.getElementById("fname_error");
const lname_error = document.getElementById("lname_error");
const email_error = document.getElementById("email_error");
const phone_error = document.getElementById("phone_error");

try
{
    form.addEventListener("submit", function(event) {  
        event.preventDefault(); // Prevent form submission on error
     
        // Regular expression for validating email and input
        var email_check = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var lettersOnly = /^[A-Za-z]+$/;

        // Validate First Name
        if(fname.value === "" || fname.value == null)
        {
           fname_error.innerHTML = "First name is required!";
        }
        else if(!fname.value.match(lettersOnly))
        {
         fname_error.innerHTML = "First name cannot be a number or numbers!";
        }
        else
        {
           fname_error.innerHTML = "";
        }
     
        // Validate Last Name
        if(lname.value === "" || lname.value == null)
        {
           lname_error.innerHTML = "Last name is required!";
        }
        else if(!lname.value.match(lettersOnly))
         {
          lname_error.innerHTML = "Last name cannot be a number or numbers!";
         }
        else
        {
           lname_error.innerHTML = "";
        }
     
        // Validate Email
        if(!email.value.match(email_check))
        {
           email_error.innerHTML = "Valid Email is required! For example, example@domain.com";
        }
        else
        {
           email_error.innerHTML = "";
        }
     
        // Validate Phone
        if(phone.value === "" || phone.value == null)
        {
         phone_error.innerHTML = "Valid phone number is required!";
        }
        else
        {
         phone_error.innerHTML = "";
        }
     });
}
catch (error)
{
    console.error(error);
}


//Accordion Logic
const accor = document.getElementsByClassName("accordion");

try
{
for (i = 0; i < accor.length; i++)
{
    accor[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class, to highlight the background of a button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block")
    {
      panel.style.display = "none";
    }
    else
    {
      panel.style.display = "block";
    }
  });
}
}
catch(error)
{
    console.error(error);
}