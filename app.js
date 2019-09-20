 //getting request json server
 const requestURL="http://localhost:3000/records";


 $(document).ready(function(){
  $(".submitPro").click(function(e) {
    e.preventDefault();
   if(!validation()){
    console.log("fill in all fields") 
    return 
   } ;
    submitProfile();
    return;
  });
 });

 // validates form
 function validation(){
   const data = getPatientDetailsFromForm();
   if(!(data.firstName.trim())){
     console.log("first Name is required" )
        return false;
   }
   if(!(data.lastName.trim())){
    console.log("Last Name is required" )
       return false;
  }
  if(!(data.DOB.trim())){
    console.log("DOB is required" )
       return false;
  }
  if(!(data.email.trim())){
    console.log("Email is required" )
       return false;
  }
  if(!(data.phoneNumber.trim())){
    console.log("first Name is required" )
       return false;
  }
  if(!(data.address.trim())){
    console.log("Address is required" )
       return false;
  }
  if(!(data.kinFirstName.trim())){
    console.log("First Name is required" )
       return false;
  }
  if(!(data.kinLastName.trim())){
    console.log("Last Name is required" )
       return false;
  }
  if(!(data.kinPhoneNumber.trim())){
    console.log("phone Number is required" )
       return false;
  }
  if(!(data.kinAddress.trim())){
    console.log("Address is required" )
       return false;
  }
  return true;
 }

function getPatientDetailsFromForm() {
  var data = new Object();
  data.firstName = $("input[name='firstname']").val();
  data.lastName = $("input[name='lastname']").val();
  data.DOB = $("input[name='dob']").val();
  data.marital=$("#maritalselect").val();
  data.gender=$("#genderselect").val();
  data.email=$("input[name='email']").val();
  data.phoneNumber=$("input[name='pnumber']").val();
  data.address=$("input[name='address1']").val();
  data.address2=$("input[name='address2']").val();
  data.bloodGroup=$("#bloodgroupselect").val();
  data.genotype=$("#genotypeselect").val();
  data.dayofAppointment=$("#appointmentselect").val();
  data.kinFirstName=$("input[name='kinfirst']").val();
  data.kinLastName=$("input[name='kinlast']").val();
  data.kinPhoneNumber=$("input[name='kinnum']").val();
  data.kinAddress=$("input[name='kinaddress']").val();

  return data;
}



// POST Request
async function submitProfile()
{
  const sendRequest = await fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(getPatientDetailsFromForm())
  });
  const response = await sendRequest;
  if (response.ok) {
    console.log('sent request successfully');
    window.location.href = './index1.html';
  } else {
    console.log('something went wrong');
  }
}