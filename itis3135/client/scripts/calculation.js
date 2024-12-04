document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll('input[type="number"]');
    const outputs = {
        frontAxleWeight: document.getElementById('front-axle-weight'),
        rearAxleWeight: document.getElementById('rear-axle-weight'),
        totalWeight: document.getElementById('total-weight'),
        crossweightPercent: document.getElementById('crossweight-percent'),
        frontWeightPercent: document.getElementById('front-weight-percent')
    };

    function calculateResults() {
        const lf = parseFloat(document.getElementById('lf').value) || 0;
        const rf = parseFloat(document.getElementById('rf').value) || 0;
        const lr = parseFloat(document.getElementById('lr').value) || 0;
        const rr = parseFloat(document.getElementById('rr').value) || 0;

        const frontAxleWeight = lf + rf;
        const rearAxleWeight = lr + rr;
        const totalWeight = frontAxleWeight + rearAxleWeight;
        const crossweightPercent = ((lf + rr) / totalWeight) * 100;
        const frontWeightPercent = (frontAxleWeight / totalWeight) * 100;

        outputs.frontAxleWeight.value = frontAxleWeight.toFixed(2);
        outputs.rearAxleWeight.value = rearAxleWeight.toFixed(2);
        outputs.totalWeight.value = totalWeight.toFixed(2);
        outputs.crossweightPercent.value = crossweightPercent.toFixed(2);
        outputs.frontWeightPercent.value = frontWeightPercent.toFixed(2);
    }

    document.getElementById('calculate-button').addEventListener('click', calculateResults);

    function calculateSecondResults() {
        const input1 = parseFloat(document.getElementById('input1').value) || 0;
        const input2 = parseFloat(document.getElementById('input2').value) || 0;

        const result1 = input1 + input2;
        const result2 = input1 * input2;

        document.getElementById('result1').value = result1.toFixed(2);
        document.getElementById('result2').value = result2.toFixed(2);
    }

    document.getElementById('calculate-second-button').addEventListener('click', calculateSecondResults);
});