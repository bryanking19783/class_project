try{
function validatecgh(){
let date = document.forms.cgh.date.value;
let pcf = document.forms.cgh.pcf.value;
let hp = document.forms.cgh.hp.value;
let phone = document.forms.cgh.cpn.value;
let nam = document.forms.cgh.nam.value;
let dob = document.forms.cgh.dob.value;
let gender = document.forms.cgh.gen.value;
let eth = document.forms.cgh.radio.value;
let race = document.forms.cgh.rado.value;
let gsp = document.forms.cgh.ado.value;
let gpr = document.forms.cgh.radov.value;
let re = document.forms.cgh.re.value;
let d = document.forms.cgh.d.value;
let s = document.forms.cgh.s.value;

if(!date){
  document.getElementById('dateErr').innerHTML = "date is required";
  document.forms.cgh.date.focus();
  return false;
}
else {
  document.getElementById('dateErr').innerHTML= "";
}
if(!pcf){
  document.getElementById('pcfErr').innerHTML = "Person Completing Form is required";
  document.forms.cgh.pcf.focus();
  return false;
}
else {
  document.getElementById('pcfErr').innerHTML= "";
}
if(!hp){
  document.getElementById('hpErr').innerHTML = "Health provider is required";
  document.forms.cgh.hp.focus();
  return false;
}
else {
  document.getElementById('hpErr').innerHTML= "";
}
if(!phone){
  document.getElementById('cpnErr').innerHTML = "tel is required";
  document.forms.cgh.cpn.focus();
  return false;
}
else {
  document.getElementById('cpnErr').innerHTML= "";
}
if(!nam){
  document.getElementById('nErr').innerHTML = "name is required";
  document.forms.cgh.nam.focus();
  return false;
}
else {
  document.getElementById('nErr').innerHTML= "";
}
if(!dob){
  document.getElementById('dobErr').innerHTML = "date of birth is required";
  document.forms.cgh.dob.focus();
  return false;
}
else {
  document.getElementById('nErr').innerHTML= "";
}

if(!gender){
  document.getElementById('genErr').innerHTML = "gender is required";
  document.forms.cgh.gen.focus();
  return false;
}
else {
  document.getElementById('genErr').innerHTML= "";
}

if(!eth){
  document.getElementById('ethErr').innerHTML = "ETHNICITY is required";
  document.forms.cgh.radio.focus();
  return false;
}
else {
  document.getElementById('ethErr').innerHTML= "";
}

}
function validatenam(){
let namepattern = /^[A-Za-z\s]+$/;
let nam = document.forms.cgh.nam.value;
if(nam){
 let x = namepattern.test(nam);
 if(x==false){
   document.getElementById('nErr').innerHTML="This sould only contain letters and whitespaces";
   document.forms.cgh.nam.focus();
 }
else{
  document.getElementById('nErr').innerHTML="";
}
}
}
}
catch(err){
  window.alert(err.message);
}
