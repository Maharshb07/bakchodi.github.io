function detect() {
    var a = document.getElementById("name").value
    name = a.toLowerCase()

    if (name === "aaryen") {
        var message = a + " Buddhu !!";
        document.getElementById("content").textContent = message;
        var newtitle = document.getElementById("title").textContent;
        newtitle = "Tauba Tauba Saara Mood Kharab Kar Diya !!";
        document.getElementById("title").textContent = newtitle;

    }
    else {
        var newtitle = document.getElementById("title").textContent;
        newtitle = "Fool Detector !!";
        document.getElementById("title").textContent = newtitle; 
        var message = a + " Smart ho !!"
        document.getElementById("content").textContent = message;
    }
    

}