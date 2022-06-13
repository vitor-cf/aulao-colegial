function slide1() {
    document.getElementById("id").src="imagem/img1.jpg"; 
    setTimeout("slide2()", 5000);
} 

function slide2() {
    document.getElementById("id").src="imagem/img2.jpg";
    setTimeout("slide3()", 5000);
} 

function slide3() {
    document.getElementById("id").src="imagem/img3.jpg" 
    setTimeout("slide1()", 5000);
}
    