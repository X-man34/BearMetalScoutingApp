var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];


const form = document.getElementById('converter');
window.onload = function() {
  var form = document.getElementById('converter');
  form.onsubmit = submitted.bind(form);
}

function submitted(event) {
  
  event.preventDefault();
  var data = [];

  //auto
  data.push(document.querySelector("input[type='radio'][name=autoConesTop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=autoConesMiddle]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=autoConesBottom]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=autoConesDrop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=autoCubesTop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=autoCubesMiddle]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=autoCubesBottom]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=autoCubesDrop]:checked").value);


  //tele
  data.push(document.querySelector("input[type='radio'][name=teleConesTop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=teleConesMiddle]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=teleConesBottom]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=teleConesDrop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=teleCubesTop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=teleCubesMiddle]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=teleCubesBottom]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=teleCubesDrop]:checked").value);

  //superCharge
  data.push(document.querySelector("input[type='radio'][name=superChargeConesTop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=superChargeConesMiddle]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=superChargeConesBottom]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=superChargeConesDrop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=superChargeCubesTop]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=superChargeCubesMiddle]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=superChargeCubesBottom]:checked").value);
  data.push(document.querySelector("input[type='radio'][name=superChargeCubesDrop]:checked").value);

  //i dont' care about times over charge station cause i'm tired
  data.push("0");
  //comms
  data.push(document.getElementById("communicationField").value);



  var asdf = new QRCode(document.getElementById("qrcode"), data.toString());
  modal.style.display = "block";//display popup
  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  window.location.reload();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.reload();
  }
}
}
