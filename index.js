// Registration Coding

function regClick() {
    var cName = document.getElementById("cName").value;
    var date = document.getElementById("date").value;
    var noOfDays = Number(document.getElementById("noOfdays").value);
    var noOfPerson = Number(document.getElementById("noOfperson").value);
    var roomDelux = document.getElementById("delux");
    var roomSuite = document.getElementById("suite");
    var aminiLocker = document.getElementById("locker");
    var aminiAc = document.getElementById("ac");
    var advance = Number(document.getElementById("advancePaid").value);
    var balAmount;
    var selRoomType;
    var aminities = "";
    var totalAmount;
    if (roomDelux.checked) {
      totalAmount = Number(roomDelux.value);
      selRoomType = "Delux Room";
    }
    if (roomSuite.checked) {
      totalAmount = Number(roomSuite.value);
      selRoomType = "Suite Room";
    }
    if (aminiLocker.checked) {
      totalAmount += Number(aminiLocker.value);
      aminities = "Locker[500/Day] , ";
    }
    if (aminiAc.checked) {
      totalAmount += Number(aminiAc.value);
      aminities += "AC[500/Day]";
    }
    totalAmount *= noOfDays;
    if (noOfPerson > 2) {
      totalAmount += (noOfPerson - 2) * 500 * noOfDays;
    }
    balAmount = totalAmount - advance;
    document.getElementById("reg").style.display = "none";
    document.getElementById("bookSum").style.display = "block";
    document.getElementById("customerName").innerHTML = cName;
    document.getElementById("chInDate").innerHTML = date;
    document.getElementById("totalDays").innerHTML = noOfDays;
    document.getElementById("totalPerson").innerHTML = noOfPerson;
    document.getElementById("selectedRoom").innerHTML = selRoomType;
    document.getElementById("amini").innerHTML =
    aminities != undefined ? aminities : "No Aminities";
    document.getElementById("roomAmount").innerHTML = "₹ " + totalAmount;
    document.getElementById("adPaid").innerHTML = "₹ " + advance;
    document.getElementById("balAmount").innerHTML = "₹ " + balAmount;
  }
  
  // Active Registration Button
  
  function activeReg() {
    var btn = document.getElementById("btnReg");
    btn.removeAttribute("disabled");
    btn.style.cursor = "pointer";
  }
  
  // Close Button Coding
  
  function closeClick() {
    document.getElementById("reg").style.display = "block";
    document.getElementById("bookSum").style.display = "none";
    location = location.href;
  }