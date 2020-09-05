const formElement = document.querySelector("form");
// Shows all user input and cancels form data sending
formElement.addEventListener("submit", e => {
 const username = e.target.elements.username.value;
 console.log(`Username: ${username}`);
 if (e.target.elements.confirmation.checked) {
   console.log("You asked for email confirmation");
 } else {
   console.log("You didn't asked for email confirmation");
 }
 switch (e.target.elements.subscription.value) {
 
   case "news":
     console.log("You are subscribed to newsletters only");
     break;
   case "no":
     console.log("You are not subscribed to anything");
     break;
   default:
     console.error("Unknown subscription code");
 }
 switch (e.target.elements.nationality.value) {
   case "TN":
     console.log("You are a TN citizen");
     break;
   default:
     console.log("Your nationality is unknown");
 }
 e.preventDefault(); // Cancel form data sending
});