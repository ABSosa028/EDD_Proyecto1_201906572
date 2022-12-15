let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
window.onload = function(){
    let b = document.getElementById("hola");
    console.log(b);
    let c = ""
    a.forEach(element => { 
        c +=   "<div class=\"card\">";
        c +=   "<div class=\"card-img-top\"><br><img src=\"https://picsum.photos/750/300?random="+element+"\"></div>";
        c +=   "<div class=\"card-body\">";
        c +=   "<h5 class=\"card-title\">Card title</h5>";
        c +=   "<p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>";
        c +=   "</div>";
        c +=   "</div>";
        c +=   "<br>";
        c +=   "<br>";
        





    });
    b.innerHTML = c;
}


