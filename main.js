function openForm(){
    
    document.getElementById("contactMe").style.display="block";
}
function closeForm(){
    document.getElementById("contactMe").style.display="none";
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
}