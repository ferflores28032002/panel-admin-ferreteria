function cargaPartial(){
    // document.getElementById('side-container').innerHTML='<object type="text/html"'
    fetch('../vistas/sidevar.html')
    .then( (response)=>response.text())
    .then( (html)=>{
        document.getElementById('incluir__sidevar').innerHTML=html;
    });
    fetch('../vistas/nav.html')
    .then( (response)=>response.text())
    .then( (html)=>{
        document.getElementById('incluir__nav').innerHTML=html;
    });
}

window.onload=cargaPartial();
