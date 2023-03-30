

document.getElementById("n-p").onmouseover = function () {
    document.getElementById("n-p").innerHTML = "Y programador backend";
}


document.getElementById("n-p").onmouseout = function () {
    document.getElementById("n-p").innerHTML = "programador frontend";
}

document.getElementById("left-section").onmouseover = () => {
    document.getElementById("left-section").style.backgroundColor = "orange";
    
}

document.getElementById("left-section").onmouseout = () => {
    document.getElementById("left-section").style.backgroundColor = "#3D3F42";
}

 document.getElementById("blue-box").onmouseover = () => {
    document.getElementById("blue-box").style.backgroundColor = "#3D3F42";
}

 document.getElementById("blue-box").onmouseout = () => {
    document.getElementById("blue-box").style.backgroundColor = "#2fb7fe";
}






const formula = () => {
    location.href = "./form.html";
    
}

corre.addEventListener("click", formula);




	


