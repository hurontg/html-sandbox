// document.getElementById('btn')
//   .addEventListener(
//     'click',
//     () => {
//       const para = document.createElement("P");                 // Create a <p> element
//       para.innerHTML = "This is a paragraph.";                // Insert text
//       document.getElementById("left").appendChild(para);

//     }
//   );

  let httpRequest;


  document.getElementById("ajaxButton").addEventListener('click', makeRequest);

  function makeRequest() {

    console.log("The button was clicked");
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }

    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', 'http://localhost:8000/books');
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        console.log(httpRequest.responseText);
        alert(httpRequest.responseText);
      } else {
        console.log('There was a problem with the request.');
      }
    }
  }
