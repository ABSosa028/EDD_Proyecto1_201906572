let a = [3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
window.onload = function(){
    let b = document.getElementById("hola");
    console.log(b);
    let c = ""
    a.forEach(element => { 
        c += "<div class=\"card\">"+element+"</H1>";
    });
    b.innerHTML = c;

}


