function transform(){
    let input = document.getElementById("input").value;
    if(input.trim()==""){
        alert("Enter Your Text First");
        return;
    }
    let voice = new SpeechSynthesisUtterance(input);
    window.speechSynthesis.speak(voice);
}