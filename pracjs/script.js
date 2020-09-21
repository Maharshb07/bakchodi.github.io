
function detect() {
    var a = document.getElementById("name").value
    name = a.charAt(0).toLowerCase();

    if (name === "a"||name === "s"||name === "d"||name === "b") {
        this.textContent = "Lmao!!";
        var message = a + " Buddhu !!";
        document.getElementById("content").textContent = message;
        var newtitle = document.getElementById("title").textContent;
        newtitle = "Tauba Tauba Saara Mood Kharab Kar Diya !!";
        document.getElementById("title").textContent = newtitle;

    }
    else {
        this.textContent = "Shabash!!";
        var newtitle = document.getElementById("title").textContent;
        newtitle = "Fool Detector !!";
        document.getElementById("title").textContent = newtitle; 
        var message = a + " Smart ho !!"
        document.getElementById("content").textContent = message;
    }
    

}
document.querySelector("button").addEventListener("click",detect);

