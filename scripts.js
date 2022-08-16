function generateCV() {
    document.getElementsByClassName('form-cv')
    document.getElementById('nameT').innerHTML = document.getElementById('name').value;
    
    document.getElementById('addressT').innerHTML = document.getElementById('address').value;
    
    document.getElementById('phoneNoT').innerHTML = document.getElementById('phoneNo').value;

    document.getElementById('emailIdT').innerHTML = document.getElementById('emailId').value;

    document.getElementById('nationalityT').innerHTML = document.getElementById('nationality').value;

    document.getElementById('linkedinT').innerHTML = document.getElementById('linkedin').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objective').value;

    
    let wes = document.getElementsByClassName('workexp');
    let str = "";
    for(let e of wes){
        str = str+ '<li> ' +e.value+' </li>';
    }
    document.getElementById('workexpT').innerHTML=str;

    let aqs = document.getElementsByClassName('aqual');
    let straq = "";
    for(let m of aqs){
        straq = straq+ '<li> ' +m.value+' </li>';
    }
    document.getElementById('aqualT').innerHTML=straq;

    let sks = document.getElementsByClassName('skill');
    let strsk = "";
    for(let n of sks){
        strsk = strsk+ '<li> ' +n.value+' </li>';
    }
    document.getElementById('skillT').innerHTML=strsk;

    document.getElementById("form-cv").style.display='none'
    document.getElementById("final-cv").style.display='block'
    
}

function printCV() {
    document.getElementById('printcv').style.display='none';
    window.print();
    document.getElementById('printcv').style.display='block';
    document.getElementById('printcv').style.margin ='auto auto 10px';

}

function addwe(){
    let newTextArea= document.createElement('textarea');
    
    newTextArea.classList.add('workexp');
    newTextArea.setAttribute('rows', 3);
    newTextArea.setAttribute('cols',30);
    newTextArea.style.display='block';



    let weObj = document.getElementById('we');
    let beforeObj = document.getElementById('webtn');

    weObj.insertBefore(newTextArea,beforeObj);
    
}

function addaq(){
    let newTextArea= document.createElement('textarea');
    
    newTextArea.classList.add('aqual');
    newTextArea.setAttribute('rows', 3);
    newTextArea.setAttribute('cols',30);
    newTextArea.style.display='block';

    let aqObj = document.getElementById('aq');
    let beforeObj = document.getElementById('aqbtn');

    aqObj.insertBefore(newTextArea,beforeObj);
    
}

function addskill(){
    let newTextArea= document.createElement('textarea');
    
    newTextArea.classList.add('skill');
    newTextArea.setAttribute('rows', 3);
    newTextArea.setAttribute('cols',30);
    newTextArea.style.display='block';

    let skObj = document.getElementById('sk');
    let beforeObj = document.getElementById('skbtn');

    skObj.insertBefore(newTextArea,beforeObj);
    
}