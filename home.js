
//form validation

function validateForm() {
  let fn = document.forms["validationk"]["fname"].value;
  let p = document.forms["validationk"]["Password"].value;
  let e = document.forms["validationk"]["E-mail"].value;
  let te = document.forms["validationk"]["tel"].value;
  let ad = document.forms["validationk"]["address"].value;
  let regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
  let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})")
  let adRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])")
  let tek= /^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/;
  if (fn == "")  {
    alert("SVP entrer votre nom")
    return false
  }
  
  if(!adRegex.test(ad)){
    alert("Adresse non valid")
    return false
  }

  if(!tek.test(te)){
    alert("num telephone non valid")
    return false
  }
  if(!strongRegex.test(p)){
  alert("Le mot de passe doit contenir au moins une lettre, un nombre")
  return false; }

  if(!regex.test(e)){
    alert("Adresse e-mail non valid")
    return false
  }
  

window.location='new.html'
}

//local storage function

const callme=()=>{

let globalName = document.querySelector("#userup").value
sessionStorage.setItem("userName", globalName)

let globalTel = document.querySelector("#tel").value
sessionStorage.setItem("userTel", globalTel)

let globalLc = document.querySelector("#address").value
sessionStorage.setItem("userLc", globalLc)
}


const retour = ()=>{
  window.location='./san3aHome.html'
}

/*bad input coloration*/
function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

/*se connecter*/

const conct = ()=>{
  let arr =["macon1", "macon2","macon3", "plombier1", "plombier2", "plombier3", "menuisier1", "menuisier2", "menuisier3"]
  let ps = document.querySelector("#user").value
 if (arr.includes(ps)){window.location =`slah/${ps}.html`} 
 else alert("Ce pseudo n'existe pas")
}

const search = ()=>{
  let arr =["macon1", "macon2","macon3", "plombier1", "plombier2", "plombier3", "menuisier1", "menuisier2", "menuisier3"]
  let rc = document.querySelector("#srch").value
 if (arr.includes(rc)){window.location =`${rc}.html`} 
 else alert("Cet employee n'existe pas")
}

function previewFile() {
 let preview = document.querySelector('#profile');
 let file    = document.querySelector('#photo').files[0];
 let reader  = new FileReader();

  reader.addEventListener("load", function () {
    preview.src = reader.result;
  }, false);

  if (file) {
    reader.readAsDataURL(file);
  }
  
}
function previewWork() {

 let tof= document.querySelector('#trx').files
 console.log(tof)
 for(let i in tof){
  let preview = document.querySelector(`#tr${i}`)
   let reader  = new FileReader()

  reader.addEventListener("load", function () {
    preview.src = reader.result;

  }, false);

  if (tof[i]) {
    reader.readAsDataURL(tof[i]);
  }
 }
 
}