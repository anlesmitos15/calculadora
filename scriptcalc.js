function enviardato(genum) {   
    if(document.getElementById("numero1").value == '' ){document.getElementById("numero1").value = genum}
    else if (document.getElementById("numero2").value== '')document.getElementById("numero2").value = genum
    else {document.getElementById("numero1").value = genum}
}
function suma() {
    let x = Number(document.getElementById("numero1").value)
    let y = Number(document.getElementById("numero2").value)
    let z = x + y
    document.getElementById("resultado").innerText = z;
    
}
function resta() {
    let x = Number(document.getElementById("numero1").value)
    let y = Number(document.getElementById("numero2").value)
    let z = x - y
    document.getElementById("resultado").innerText = z;
}
function multiplicacion() {
    let x = Number(document.getElementById("numero1").value)
    let y = Number(document.getElementById("numero2").value)
    let z = x * y
    document.getElementById("resultado").innerText = z;
}
function division() {
    let x = Number(document.getElementById("numero1").value)
    let y = Number(document.getElementById("numero2").value)
    let z = x / y
    document.getElementById("resultado").innerText = z;
}
function limpiar() {
    document.getElementById("numero1").value=''
    document.getElementById("numero2").value=''  
    document.getElementById("resultado").innerText =''
}

function igual() {
    g=Number(document.getElementById("numero1").value)
    document.getElementById("numero2").value=(g*g) 
}
