var stl_viewer = new StlViewer(
    document.getElementById("stl_cont"),
    {
        models: [
            {
                filename: "../models/upright2.stl",
                color: "#006A4D",
            }
        ]
    }
);

function switchModel(filename) {
    stl_viewer.clean(); // Remove the current model
    stl_viewer.add_model({
        filename: "../models/" + filename,
        color: "#006A4D", 
    });
}

function animateModel() {
    stl_viewer.set_rotation(0, 0, 0); // Reset rotation
    stl_viewer.set_auto_rotate(true); // Enable auto-rotation with a speed of 1
}

function stopAnimation() {
    stl_viewer.set_auto_rotate(false); // Disable auto-rotation
}
