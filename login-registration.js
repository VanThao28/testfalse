//check button disabled
function checkEmpty(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let birthday = document.getElementById('birthday').value;
    let sex = document.getElementById('sex').value;
   // let sex1 = document.getElementById('sex1').value;
    let agree = document.getElementById('agree').value;
    let agree1 = document.getElementById('agree1').value;
    if(name !='' && email !='' && phone != '' && birthday != '' && sex != '' && agree != '' && agree1 != ''){
        document.getElementById('submit').classList.remove("disabled");
        console.log('true');
    }else{
        document.getElementById('submit').classList.add('disabled');
        console.log('flase');
    }
}