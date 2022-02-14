var SpeechRecognition=window.webkitSpeechRecognition;
var Recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML="";
    Recognition.start();
}

Recognition.onresult=function run(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textbox").innerHTML=content;
    speak();
}

function speak()
{
    var synth=window.speechSynthesis;
    speak_data=document.getElementById("textbox").value;
    var uttet=new SpeechSynthesisUtterance(speak_data);
    synth.speak(uttet);
    Webcam.attach(camera);
}

Webcam.set({
Width: 360,
Height: 250,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");