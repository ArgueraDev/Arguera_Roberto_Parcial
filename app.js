document.addEventListener("DOMContentLoaded",function(){
    var btn = document.getElementById("btnCalcular");
    var tipo = document.getElementById("cboTipo");
    let de = document.querySelector("#cboDe");
    let a = document.querySelector("#cboA");
    let monedas = {"dolar": 1, "colon": 8.75, "yenes":111.27, "rupia":69.75,"lempira":24.36,"peso":19.36,"bitcoin":0.00026};
    let longitud = {"metro":1,"centimetro":100,"pulgada":39.3701,"pie":3.28084,"vara":1.1963081929167,"yarda":1.09361,"km":0.001,"milla":0.000621371};

    ;


    btn.addEventListener("click",function(){
        
    });


});
function llenar(){
    let de1 = document.getElementById("cboDe");
    let a1 = document.getElementById("cboA");
    let monedas2 = ["dolar", "colon", "yenes", "rupia","lempira","peso","bitcoin"];
    let longitud2 = ["metro","centimetro","pulgada","pie","vara","yarda","km","milla"];
    if(tipo.value == "moneda"){
        for(var i=0;i<monedas2.length;i++){ 
            var newop = document.createElement("option");
            newop.value = monedas2;
            newop.innerHTML = monedas2;
            de1.options.add(newop);
          };
          for(var i=0;i<monedas2.length;i++){ 
            var newop = document.createElement("option");
            newop.value = monedas2;
            newop.innerHTML = monedas2;
            a1.options.add(newop);
          };
    } else if (tipo.value == "longitud"){
        for(var i=0;i<longitud2.length;i++){ 
            var newop = document.createElement("option");
            newop.value = longitud2;
            newop.innerHTML = longitud2;
            de1.options.add(newop);
          };
          for(var i=0;i<longitud2.length;i++){ 
            var newop = document.createElement("option");
            newop.value = longitud2;
            newop.innerHTML = longitud2;
            a1.options.add(newop);
          };
    }
};