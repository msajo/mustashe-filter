function preLoad(){

}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}
function modelLoaded(){
    console.log("poseNet has been initialized");

}
function gotPose(results){
    if(results.length>0){
        console.log(results);
        
    }
}
function draw(){

}
function take_snapshot(){
    save('Mustshe_filter_img.png');
}