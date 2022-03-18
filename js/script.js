// MODAL FUNCTIONS

var modal = document.getElementById("myModal");
    
var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//MODAL FUNCTIONS

//VERIFY CHECKING

// function getVal() {
//     const val = document.querySelector('input').value;
    
//     document.getElementById('tester').innerText = val;
//   }

// //VERIFY CHECKING

// var errorBox = document.getElementById('errBox');

//     var btns = document.getElementById('tester');

//     btns.onclick = function() {
//       errorBox.style.display = "block";
//     }
