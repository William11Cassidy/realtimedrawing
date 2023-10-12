nosex = 0
nosey = 0
leftwristx = 0
rightwristx = 0
difference = 0




function setup() {
    canvas = createCanvas(550, 500)
    canvas.position(560, 80)
    video = createCapture(VIDEO)
    video.size(550, 500)
    posenet = ml5.poseNet(video, modelloaded)
    posenet.on("pose", gotposes)
}

function draw() {
    background("lightblue")
    fill("yellow")
    textSize(difference)
    text("william",nosex, nosey)

}

function modelloaded() {
    console.log("posenet is ready");
}

function gotposes(result) {
    if (result.length > 0) {
        console.log(result);
        nosex = result[0].pose.nose.x
        nosey = result[0].pose.nose.y
        leftwristx = result[0].pose.leftWrist.x
        rightwristx = result[0].pose.rightWrist.x
        difference = leftwristx - rightwristx
    }
}