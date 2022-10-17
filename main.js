function setup() {
    video = createCapture(VIDEO);
    video.size(500, 550);
    canvas = createCanvas(560, 560);
    canvas.position(560, 150);
    model = ml5.poseNet(video, modelLoaded);
    model.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Model loaded successfully");
}