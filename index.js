window.onload = function() {
    // Get the canvas and context
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    // Create the image
    var image = new Image();
    image.src = "image.png";
    image.onload = function() {
        // Draw the image
        context.drawImage(image, 0, 0);
    };
};