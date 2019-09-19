const getAdmin="http://localhost:3000/admins";

// Add click listerner
$(document).ready(function(){
    $("#loginbutton").click(function(e) {
      e.preventDefault();
      getadminlogindetailsAndSignIn()
      return;
    });
   });

   async function getadminlogindetailsAndSignIn(){
     
    // Retrieve data from db
   const response = await fetch(getAdmin);
   const responseData= await response.json();
  

   //gets inputs fields
    var data = new Object();
    data.username = $("input[name='username']").val();
    data.password = $("input[name='password']").val();
    // console.log(data)

    
  //compare input and db data
      console.log(responseData)
      if(responseData[0].username==data.username && responseData[0].password==data.password){
        console.log("Hi")
        window.location.href = './index1.html';
      }
    console.log("sup")
   }

  

