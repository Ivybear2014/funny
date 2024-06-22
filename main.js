N = 0
Nx = 0
function function1()
{
    save("cute.jpg")
}
function setup()
{
    canvas = createCanvas(300,250)
    canvas.center()
    Video = createCapture(VIDEO)
    Video.size(400,250)
    Video.hide()
    posenet = ml5.poseNet(Video,modelLoaded)
    posenet.on('pose',gotPoses)
}
function gotPoses(results)
{  if(results.length > 0)
      {    console.log(results);
            console.log("leftWrist x = " + results[0].pose.nose.x);
        console.log("leftWrist y = " + results[0].pose.nose.y); 
      Nx = results[0].pose.nose.x
        N = results[0].pose.nose.y
    }}
function draw(){
    image(Video,0,0,300,250)
    image(img, Nx - 110, N - 0, 100, 40)
}
function modelLoaded()
{
    console.log('yay its working')
}
function preload()
{
    img = loadImage("https://i.postimg.cc/4xQ3ZsVX/R-3.png")
}