const urlParams = new URLSearchParams(window.location.search);

window.onload = function () {
  getPatientDetails(urlParams.get('id'))
}

async function getPatientDetails (id) {
  const getPatientRequest = await fetch(`${requestURL}/${id}`);
  const patient = await getPatientRequest.json();
  fillPatientDetailsInForm(patient);
}

function fillPatientDetailsInForm(patient) {
  const date = new Date(patient.DOB);
  $("input[name='firstname']").val(patient.firstName);
  $("input[name='lastname']").val(patient.lastName);
  $("input[name='dob']").val(`${date.getFullYear()}-${date.getMonth() < 10 ? `0${date.getMonth()}` : date.getMonth()}-${date.getDate()}`);
  $("#maritalselect").val(patient.marital);
  $("#genderselect").val(patient.gender);
  $("input[name='email']").val(patient.email);
  $("input[name='pnumber']").val(patient.phoneNumber);
  $("input[name='address1']").val(patient.address);
  $("input[name='address2']").val(patient.address2);
  $("#bloodgroupselect").val(patient.bloodGroup);
  $("#genotypeselect").val(patient.genotype);
  $("#appointmentselect").val(patient.dayofAppointment);
  $("input[name='kinfirst']").val(patient.kinFirstName);
  $("input[name='kinlast']").val(patient.kinLastName);
  $("input[name='kinnum']").val(patient.kinPhoneNumber);
  $("input[name='kinaddress']").val(patient.kinAddress);
}

$(document).ready(function(){
  $(".editPro").click(function(e) {
    e.preventDefault();
    editProfile();
    return;
  });
 });

 async function editProfile() {
   const updatePatientDetails = await fetch(`${requestURL}/${urlParams.get('id')}`, {
     method: 'PUT',
     body: JSON.stringify(getPatientDetailsFromForm()),
     headers: {
      'Content-Type': 'application/json',
    }
   });
   if (updatePatientDetails.ok) {
      console.log('successfully updated')
      window.location.href = './index1.html';
   } else {
     console.log('could not update')
   }
 }