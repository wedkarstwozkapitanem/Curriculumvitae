const zdjecia = document.querySelectorAll("#certfikaty img");

let aktywna = 0;
function zmien_fote() {
    zdjecia[aktywna].style.display = "none";
    aktywna == zdjecia.length - 1 ? aktywna = 0 : aktywna++;
    zdjecia[aktywna].style.display = "block";
}
function zmien_fotep(ktora) {
    zdjecia[aktywna].style.display = "none";
    aktywna = ktora;
    zdjecia[ktora].style.display = "block";
}

const zmiana = setInterval(zmien_fote,3000);



const certifikaty_male = document.querySelectorAll("#certifikaty_male img");

let licznik = 0;
certifikaty_male.forEach((e)=> {
    e.dataset.ktore = licznik;
    licznik++;
    e.addEventListener('click',()=>{
        zmien_fotep(e.dataset.ktore);
  //      clearInterval(zmiana);
    })
})

document.addEventListener('scroll',()=>{

})