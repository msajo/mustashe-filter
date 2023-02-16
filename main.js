nose_x = 0;
nose_y = 0;
function preload(){
    mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
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
        nose_x = results[0].pose.nose.x;
        nose_y = results[0].pose.nose.y;
        console.log("nose x position is " + nose_x);
        console.log("nose y position is " + nose_y);
    }
}
function draw(){
    image(video,0,0,300,300);
    image(mustache,nose_x-20,nose_y,40,20);
    
    
    
}
function take_snapshot(){
    save('Mustshe_filter_img.png');
}