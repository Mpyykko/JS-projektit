// äänikomennot

// pelaa-painike
const pelaa = document.getElementById('pelaa-painike');
pelaa.addEventListener('click', pelikierros);

// muuttujat saldolle, panokselle ja voitoille
let saldo = 100;
const naytaUusisaldo = document.getElementById('saldo');
let panos = 1;
const naytaUusipanos = document.getElementById('panos');
let voitto = 0;
const naytaVoitto = document.getElementById('voitto');

let voittoTeksti = document.getElementById('voittoTeksti');





// panos pienenee

const panosPienemmalle = document.getElementById('panosAlas-painike');
panosPienemmalle.addEventListener('click', vahennaPanosta);

// panos suurenee

const panosSuuremmalle = document.getElementById('panosYlos-painike');
panosSuuremmalle.addEventListener('click', suurennaPanosta);

// iso voitto funktio

const bigwin = document.getElementById('iso-voitto');

// iso voitto objektiksi
const isovoittokuva = {
    html: "<img src='pelikuvat/isovoitto.png' class='iso-voitto'>",
    arvo: 10
};

function isovoitto(){

    bigwin.innerHTML = isovoittokuva.html;


}



let rullienTulokset =[];

// pääohjelma
function pelikierros(){
    

     // jos saldo ei riitä
     if(saldo < panos){
        voittoTeksti.innerHTML = 'Not enough money!';
    };

    
    
    // jos saldo riittää
    if(saldo > 0 && panos <= saldo ){
        rullatPyorii();
        saldo = saldo - panos;

        // melonit
        if (rullienTulokset.every(val => val === 1)) {
            voitto += panos *1000;
            isovoitto();
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 1)) {
            voitto += panos *100;
            isovoitto();
        }

       

        
        // seiskat
        if (rullienTulokset.every(val => val === 2)) {
            voitto += panos *1000;
            isovoitto();
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 2)) {
            voitto += panos *100;
            isovoitto();
        }

        // barit
        if (rullienTulokset.every(val => val === 3)) {
            voitto += panos *1000;
            isovoitto();
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 3)) {
            voitto += panos *100;
            isovoitto();

        }

        // esedua
        if (rullienTulokset.every(val => val === 4)) {
            voitto += panos *1000;
            isovoitto();
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 4)) {
            voitto += panos *100;
            isovoitto();
        }

        // lippua
        if (rullienTulokset.every(val => val === 5)) {
            voitto += panos *1000;
            isovoitto();
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 5)) {
            voitto += panos *100;
            isovoitto();
        }

        // tähteä
        if (rullienTulokset.every(val => val === 6)) {
            voitto += panos *1000;
            isovoitto();
        }
        else if (rullienTulokset.slice(0, 3).every(val => val === 6)) {
            voitto += panos *100;
            isovoitto();

        }

   
        console.log(rullienTulokset);

        saldo += voitto;
        naytaUusiVoitto();
        naytaSaldo();
 
       
    }

   


   rullienTulokset =[];

    
}

// pääohjelma loppuu


// rullien pyöriminen

// voittosymbolit objekteiksi
const meloni = {
    html: "<img src='pelikuvat/melon.png' class='rulla-symboli'>",
    arvo: 1
};
const seiska = {
    html:  "<img src='pelikuvat/seiska.png' class='rulla-symboli'>",
    arvo : 2
};
const bar =  {
    html: "<img src='pelikuvat/bar.png' class='rulla-symboli'>",
    arvo: 3
};
const eselogo = {
    html: "<img src='pelikuvat/ese.png' class='rulla-symboli'>",
    arvo: 4
};
const lippu = {
    html: "<img src='pelikuvat/omalippu.png' class='rulla-symboli'>",
    arvo: 5
};
const tahti = {
    html: "<img src='pelikuvat/tahti.png' class='rulla-symboli'>",
    arvo: 6
};

const voittoKuviot = [meloni,seiska,bar,eselogo,lippu,tahti];



// pyöritysfunktio
function rullatPyorii(){

    bigwin.innerHTML = '';

    voittoTeksti.innerHTML = '';
    voitto = 0;

    console.log(rulla1(),
    rulla2(),
    rulla3(),
    rulla4())
 
}




// ekan rullan kuvion arvonta
function rulla1(){


    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    const element = document.getElementById('rulla1');
    element.innerHTML = arvottuKuvio.html;

    // lisätään arvottujen kuvioiden arvot listalle jossa niitä voidaan käsitellä
    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;

}
 


// tokan rullan kuvion arvonta
function rulla2(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla2').innerHTML = arvottuKuvio.html;

    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;
  

}
// kolmannen rullan kuvion arvonta
function rulla3(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla3').innerHTML = arvottuKuvio.html;

    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;
  

}
// neljännen rullan kuvion arvonta
function rulla4(){
   

    let indeksi = Math.floor(Math.random() * voittoKuviot.length);
    const arvottuKuvio = voittoKuviot[indeksi];

    document.getElementById('rulla4').innerHTML = arvottuKuvio.html;

    rullienTulokset.push(arvottuKuvio.arvo);

    return arvottuKuvio.arvo;
  
  

}






// saldon päivitys-funktio
function naytaSaldo() {
    naytaUusisaldo.innerHTML = (`Cash <br> ${saldo} €`);
}

// voitto päivitys-funktio
function naytaUusiVoitto() {
    naytaVoitto.innerHTML = (`Win <br> ${voitto} €`);
}

// panoksen päivitys-funktio
function vahennaPanosta() {
    if(panos >1){
    panos--;
    naytaUusipanos.innerHTML = (`Bet <br> ${panos} €`);
    }
}

// panoksen päivitys-funktio
function suurennaPanosta() {
    if(panos <10 ){
    panos++;
    naytaUusipanos.innerHTML = (`Bet <br> ${panos} €`);
    }
}


// rullan lukitus





