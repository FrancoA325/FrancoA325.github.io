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

    function calculateCorneringSpeed() {
        // Get the input values
        const radius = parseFloat(document.getElementById('radius').value);
        const angularVelocity = parseFloat(document.getElementById('ang-vel').value);
    
        // Calculate the cornering speed
        const corneringSpeed = radius * angularVelocity;
    
        // Update the result in the HTML
        document.getElementById('velocity').value = corneringSpeed.toFixed(2);
    }
    

    document.getElementById('calculate-velocity').addEventListener('click', calculateCorneringSpeed);
});