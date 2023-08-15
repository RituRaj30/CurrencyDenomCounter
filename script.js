
function calculateNotes() {
    var amount = document.getElementById('inamount').value;
    amount = parseInt(amount);
  
    if (!amount) {
      document.getElementById('2000').innerHTML = 0;
      document.getElementById('500').innerHTML = 0;
      document.getElementById('200').innerHTML = 0;
      document.getElementById('100').innerHTML = 0;
      document.getElementById('50').innerHTML = 0;
      document.getElementById('20').innerHTML = 0;
      document.getElementById('10').innerHTML = 0;
      document.getElementById('5').innerHTML = 0;
      document.getElementById('2').innerHTML = 0;
      document.getElementById('1').innerHTML = 0;
      document.getElementById('sum').innerHTML = 0;
    }
  
    else {
      let arr = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
      let notes = {};
      let sum = 0;
      for (let i = 0; i < 10; i++) {
        let k = Math.floor(amount / arr[i]);
        amount = amount - k * arr[i];
        notes[i] = k;
        sum = sum + k;
      }
      document.getElementById('2000').innerHTML = notes[0];
      document.getElementById('500').innerHTML = notes[1];
      document.getElementById('200').innerHTML = notes[2];
      document.getElementById('100').innerHTML = notes[3];
      document.getElementById('50').innerHTML = notes[4];
      document.getElementById('20').innerHTML = notes[5];
      document.getElementById('10').innerHTML = notes[6];
      document.getElementById('5').innerHTML = notes[7];
      document.getElementById('2').innerHTML = notes[8];
      document.getElementById('1').innerHTML = notes[9];
      document.getElementById('sum').innerHTML = sum;
    }
  }
  
  function zero() {
    if (!amount) {
      document.getElementById('2000').innerHTML = 0;
      document.getElementById('500').innerHTML = 0;
      document.getElementById('200').innerHTML = 0;
      document.getElementById('100').innerHTML = 0;
      document.getElementById('50').innerHTML = 0;
      document.getElementById('20').innerHTML = 0;
      document.getElementById('10').innerHTML = 0;
      document.getElementById('5').innerHTML = 0;
      document.getElementById('2').innerHTML = 0;
      document.getElementById('1').innerHTML = 0;
      document.getElementById('sum').innerHTML = 0;
    }
  }
  
  function handleSearchChange() {
    var amount = document.getElementById('inamount').value;
    amount = parseInt(amount);
    if (amount.value == "") {
      zero();
    }
  }