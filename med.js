// the moment we load index1 it call  getAllPatientsDetails();
window.onload = function() {
  getAllPatientsDetails();
};


async function getAllPatientsDetails() {
  //Get records
  const getPatientRecords = await fetch(requestURL);
  let allPatientsRecords = await getPatientRecords.json();


  //loops through the records from the backend
  allPatientsRecords.forEach((record) => {

    //checks if the delete
    if (record.deleted !== true) {
      const cardParent = document.createElement('div');
      cardParent.classList.add('col-4', 'pb-3', 'mb-md-0', 'main');
      const cardElement = document.createElement('div');
      cardElement.classList.add('card');
      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');
      const header = document.createElement('h4');
      header.classList.add('card-title');
      header.innerText = `${record.firstName} ${record.lastName}`;
      const viewButton = document.createElement('a');
      viewButton.setAttribute('href', `./index3.html?id=${record.id}`)
      viewButton.classList.add('btn', 'btn-info', 'viewpro');
      viewButton.innerText = 'View';
      const deleteButton = document.createElement('button');
      deleteButton.setAttribute('value', record.id)
      deleteButton.addEventListener('click', function(e) {
        e.preventDefault();
        deletePatientDetails(e.target.value)
      });
      deleteButton.classList.add('btn', 'btn-danger', 'deletepro');
      deleteButton.innerText = 'Delete';
      cardBody.appendChild(header);
      cardBody.appendChild(viewButton);
      cardBody.appendChild(deleteButton);
      cardElement.appendChild(cardBody);
      cardParent.appendChild(cardElement);
      const rowElement = document.getElementsByClassName('row');
      rowElement[0].appendChild(cardParent);
    }
  });
}




//Delete Patient Details
async function deletePatientDetails(id) {
  const sendRequest = await fetch(`${requestURL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({deleted: true})
  });

  if (sendRequest.ok) {
    window.location.reload();
  } else {
    console.log('Someting went wrong')
  }
}
// To Toggle Nav Bar 
$(".togglebutton").hover(function(){
	
 $(this).addClass("highlighted");
},
function(){
	$(this).removeClass("highlighted");
 }
);

$(".togglebutton").click(function(){
	$(this).toggleClass("active");

    $(this).removeClass("highlighted")});
       






   

    
    