function openForm(){
    
    document.getElementById("contactMe").style.display="block";
}
function closeForm(){

    var span = document.getElementsByClassName("close")[0];
   // document.getElementsByClassName("close").style.display="none"
}
   span.onclick = function() {
    document.getElementById("contactMe").style.display="none"
      }    

function validate() {
    var name= document.getElementById("name").value;
    var email= document.getElementById("email").value;
    var title= document.getElementById("title").value;
    var message= document.getElementById("message").value;
 
    if (name==='' || email ===''|| title===''||message===''){
        alert ("Please fill all fields");
        return false;
        }

else {
        
    alert("Form submitted successfully....");
return true;
}
}git