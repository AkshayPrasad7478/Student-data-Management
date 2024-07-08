// Creating an array to store the objects...........
const arr=[];

// getting the input elements...........
const sName = document.getElementById("name");
const sId = document.getElementById("id");
const sEmail = document.getElementById("email");
const sContactNumber = document.getElementById("contactNumber");
const subBtn = document.getElementById("subButton");
const dataSection = document.getElementById("section2");


// Adding the eventlistener on submit button.........
subBtn.addEventListener("click", addStudent);

// created a function to add buttons........
function addStudent(){

    // assuring the name field should only contain the characters.
    var letters = /^[a-zA-Z\s]*$/;

    if(!sName.value.match(letters)){
        alert("Enter the letters only in the name field");
        return;
    }
    
    // condition to check if all the input elements are filled with the values.............
    if(sName.value=="" || sId.value=="" || sEmail.value=="" || sContactNumber.value==""){
       alert("Please fill all the details before submiting the form ")
       return;
    }

    //  this condition will check if the email is in "@" formate..........
    if(!sEmail.value.includes("@")){
        alert("Please provide a valid Email address")
        return;
    }

    // checking if the array contains the duplicate ID of students........
    const hasId = arr.some(student => student.id === sId.value);

    if(hasId==true){
        alert("Id is already taken")
        return;
    }
    
    // addind the data to the list 
else{

    // creating the elements to store the values of student data........
   const dataDiv = document.createElement("div");
   const sName1 = document.createElement("p");
   const sId1 = document.createElement("p");
   const sEmail1 = document.createElement("p");
   const sContactNumber1 = document.createElement("p");
   const dltEditDiv = document.createElement("div");
   const dltButton = document.createElement("button");
   const editButton = document.createElement("button");  

    // adding class and Id to the created elements..........
   dataDiv.classList.add("dataDiv");
   sName1.classList.add("sName1");
   sId1.classList.add("sId1");
   sEmail1.classList.add("sEmail1");
   sContactNumber1.classList.add("sContactNumber1");
   dltEditDiv.classList.add("dltEditBtn");
   dltButton.id = "dltButton";
   editButton.id = "editButton";
   

    // providing inner HTML to buttons............
   dltButton.innerHTML="Delete";
   editButton.innerHTML="Edit";

//    creating an object to hold the data of student ..............
let students ={
    name:"",
    id:"",
    email:"",
    contact:""
}

// providing the value to object from the input filds...........
   students.name=sName.value;
   students.id= sId.value;
   students.email = sEmail.value;
   students.contact = sContactNumber.value;

// providing the values to the newly created elements...............
   sName1.innerHTML= students.name;
   sId1.innerHTML = students.id;
   sEmail1.innerHTML = students.email;
   sContactNumber1.innerHTML= students.contact;

//pussing the student object in the array..........
   arr.push(students);

// appending the element to the relevent containers.........
dataSection.appendChild(dataDiv);
dataDiv.appendChild(sName1);
dataDiv.appendChild(sId1);
dataDiv.appendChild(sEmail1);
dataDiv.appendChild(sContactNumber1);
dataDiv.appendChild(dltEditDiv);
dltEditDiv.appendChild(dltButton);
dltEditDiv.appendChild(editButton);

// making the input filds clear to get the new values.......
   sName.value = "";
   sId.value = "";
   sEmail.value = "";
   sContactNumber.value = "";

}
}

// adding event listener on the "delete" and "edit" button..........
dataSection.addEventListener("click", deleteStudent);


function deleteStudent(e){
    const target = e.target;

   

//  delete function........
    if(target.id === "dltButton" ){

        const element = target.parentElement.parentElement;
        
        const studentToBeDeleted = element.querySelector(".sId1").innerHTML;
         const index = arr.findIndex(student => student.id === studentToBeDeleted);
        arr.splice(index, 1);
        element.remove();
    }

    // edit function.........
    else if(target.id === "editButton"){
       
        const element = target.parentElement.parentElement;
        sName.value = element.querySelector(".sName1").innerHTML;
        sId.value = element.querySelector(".sId1").innerHTML;
        sEmail.value = element.querySelector(".sEmail1").innerHTML;
        sContactNumber.value = element.querySelector(".sContactNumber1").innerHTML;
        const studentToBeDeleted = element.querySelector(".sId1").innerHTML;
        const index = arr.findIndex(student => student.id === studentToBeDeleted);
        arr.splice(index, 1);
        element.remove();
        
        

    }
    
}