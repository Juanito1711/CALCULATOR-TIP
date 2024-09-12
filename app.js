const button = document.getElementById('btn-calculate');

button.addEventListener('click', () => {
    const billAmount = parseInt(document.getElementById('bill-amount').value);
    const tipPercentage = parseInt(document.getElementById('tip-percentage').value);
    const total = document.getElementById('result');
    let billAmount_status = false, tipPercentage_Status = false;

    if(billAmount === '' || isNaN(billAmount) || billAmount <= 0) {
        alert("Please input a valid integer");
    } else {
        billAmount.innerHTML = '';
        billAmount_status = true;
    }

    if(tipPercentage === '' || isNaN(tipPercentage) || tipPercentage <= 0) {
        alert("Please input a valid integer");
    } else {
        tipPercentage.innerHTML = '';
        tipPercentage_Status= true;
    }

    if(billAmount && tipPercentage) {

        let totalCalculation = billAmount + (billAmount * (tipPercentage/100));
        total.innerHTML = totalCalculation.toFixed(2);

        

    } else {
        alert("Input error on form");
        total.innerHTML = '';
    }


})