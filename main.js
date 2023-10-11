Webcam.set({
    width:300,
    height:300,
    image_format: 'png',
    png_quality: 90
})

camera = document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';

    }
    )};

    classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/jNJfC6pAi/model.json ", modelLoaded);

    function modelLoaded(){
        console.log('ml5 verson', ml5.version);
    }

    function check(){
        img = document.getElementById("captured_image");
        classifier.classify(img, gotResult);
    }

    function gotResult(error, results){
        if(error)
        {
            console.error(error);
        } else {
            console.log(results);
            document.getElementById("result_emotion_name").innerHTML = results[0].label;
            document.getElementById("result_emotion_name2").innerHTML = results[1].label;
            prediction1 = results[0].label;
            prediction1 = results[1].label;
            speak();
            if(results[0].label == "best"){
                document.getElementById("emotion_update").innerHTML = "&#128077";
            }
            if(results[0].label == "amazing"){
                document.getElementById("emotion_update").innerHTML = "&#128532";
            }
            if(results[0].label == "victory"){
                document.getElementById("emotion_update").innerHTML = "&#9996";
            }
        }
    }


