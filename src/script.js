document.getElementById('container').onchange = function() {

    const bill = Number(document.getElementById('bill-total').value);
    const tipPercent = document.getElementById('tip-input').value;
    const split = document.getElementById('split-input').value;

    const tipValue = bill * (tipPercent / 100);
    const newBillEach = (bill + tipValue) / split;
    const tipEach = tipValue / split;

    document.getElementById('tip-output').innerHTML = tipPercent + "%";
    document.getElementById('split-output').innerHTML = split;
    document.getElementById('new-bill').innerHTML = "$" + newBillEach.toFixed(2);
    document.getElementById('tip-each').innerHTML = "$" + tipEach.toFixed(2);
}