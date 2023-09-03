// document.getElementById('btn')
//   .addEventListener(
//     'click',
//     () => {
//       const para = document.createElement("P");                 // Create a <p> element
//       para.innerHTML = "This is a paragraph.";                // Insert text
//       document.getElementById("left").appendChild(para);

//     }
//   );

// DOM Document Object Model

// const myCar = {
//   make: "Some Car Make",
//   model: "Some Car Model"
// };

// console.log(myCar);

// const myCarAsString = JSON.stringify(myCar);

// console.log(myCarAsString);


let httpRequest;

const ajaxButton = document.getElementById("get-data");
ajaxButton.addEventListener('click', makeRequest);

// callback function
function makeRequest() {

  console.log("The button was clicked");
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Giving up :( Cannot create an XMLHTTP instance');
    return false;
  }

  httpRequest.onreadystatechange = alertContents;
  httpRequest.open('GET', 'http://localhost:8000/cars');
  httpRequest.send();
}

function alertContents() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);

      // var tbodyRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];

      // const books = JSON.parse(httpRequest.responseText);
      // books.forEach(book => {
      //   console.log(book.title);

      //   // Insert a row at the end of table
      //   var newRow = tbodyRef.insertRow();

      //   // Insert a cell at the end of the row
      //   var newCell = newRow.insertCell();

      //   // Append a text node to the cell
      //   var newText = document.createTextNode(book.title);
      //   newCell.appendChild(newText);
      // });
      // alert(httpRequest.responseText);

    } else {
      console.log('There was a problem with the request.');
    }
  }
}

// 
// post
//
document.getElementById("post-data").addEventListener('click', postDataToServer);

function postDataToServer() {

  var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
  xmlhttp.open("POST", "http://localhost:8000/cars");
  xmlhttp.setRequestHeader("Content-Type", "application/json");

  const myCar = {
    make: "Some Car Make 2",
    model: "Some Car Model 2"
  };

  // xmlhttp.onreadystatechange = alertContents;

  xmlhttp.send(JSON.stringify(myCar));

}

//
// put
// 
document.getElementById("update-data").addEventListener('click', putDataToServer);

function putDataToServer() {
  var url = "http://localhost:8000/cars";

  const data = { 
    make: "JEEP-2", 
    model: "Wrangler-2" 
  };

  var jsonString = JSON.stringify(data);

  var xhr = new XMLHttpRequest();

  xhr.open("PUT", url + '/7', true);

  xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

  xhr.onload = function () {
    const response = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log("ok");
    } else {
      console.error("error");
    }
  }
  xhr.send(jsonString);
}

//
// delete
//
document.getElementById("delete-data").addEventListener('click', deleteDataOnServer);

function deleteDataOnServer() {
  var url = "http://localhost:8000/cars";
  var xhr = new XMLHttpRequest();

  xhr.open("DELETE", url + '/7', true);
  
  xhr.onload = function () {
    const response = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      console.log(response);
    } else {
      console.error("error");
    }
  }
  xhr.send(null);

}
