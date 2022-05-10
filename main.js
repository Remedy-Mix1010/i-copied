function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
    }
    function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    canvas.mouseReleased(canvas_classify);
    }
    function canvas_classify(){
        classifier.classify(canvas, gotResult);
    }
    function gotResult(error, result){
        if(error){
            console.log(error)
        }
        else{
            console.log(result)
            document.getElementById("label").innerHTML="label:"+result[0].label;
            document.getElementById("confidence").innerHTML="confidence:"+Math.round(result[0].confidence*100)+"%";
        }
    }
    function draw(){
    strokeWeight(13);
    stroke(0);
    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    }
    function clear_canvas(){
        background("#ffffff");
    }