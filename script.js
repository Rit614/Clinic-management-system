let team = document.querySelector('.team');
let images = document.querySelectorAll('.team img');
let card = document.querySelectorAll('.servicecart');
let count = 0;
let imagesVisible = 4; 
let imageswidth=300+40;
let imagesMargin = 20;
let totalSlides = Math.ceil(images.length / imagesVisible);

function slide() {
    team.style.transform = `translateX(-${count * (240 * imagesVisible + 20 * imagesVisible * 2)}px)`;
}

setInterval(() => {
    count++;
    if (count >= totalSlides) {
        count = 0;
    }
    slide();
}, 3000);
let patients=[];
let token= 1;

function login(){
    let role = document.getElementById('role').value;
    document.getElementById('login').style.display='none';
    document.getElementById('system').style.display='block';   


    if (role === 'Doctor'){
        document.getElementById('doctorpanel').style.display='block';
        document.getElementById('Receptionist').style.display='none';
       
    }
    else{
        document.getElementById('Receptionist').style.display='block';
        document.getElementById('doctorpanel').style.display='none';

    }
}
function viewpatient(){
let text='<h3>Patient list: </h3><ul>';


    for(let i=0;i<patients.length;i++){
        text +='<li>Token'+patients[i].token+',name: '+patients[i].name +',prescription: '+patients[i].prescription+'</li>';
    }
    text+='</ul>';
    document.getElementById('patients').innerHTML=text;


}
function Addpatient(){
let name = document.getElementById('patientName').value;
let prescription= document.getElementById('prescription').value;

if(name !=='' && prescription !=='' ){
    patients.push({token: token,name: name,prescription: prescription});
    token++;
    alert('patient details added');
    document.getElementById('pateintname').value='';
    document.getElementById('prescription').value=''; 

    viewpatient();

}
else{
    alert('please Fill all the details');
}
}
function logout() {
    document.getElementById('login').style.display = 'block';
    document.getElementById('system').style.display = 'none';
}


function generatebill(){
    let bill =document.getElementById('bill');
    if(patients.length>0){
        bill.innerHTML='<h3>Total bill: '+(patients.length*200)+'</h3>';
    }
    else{
        bill.innerHTML='No patients to bill';
    }
}

card.forEach(function(curCard){
    curCard.addeventListener("click", function(){
        console.log(curCard);
    })
})