function generateCV() {
    document.getElementsByClassName('form-cv')
    document.getElementById('nameT').innerHTML = document.getElementById('name').value;
    
    document.getElementById('addressT').innerHTML = document.getElementById('address').value;
    
    document.getElementById('phoneNoT').innerHTML = document.getElementById('phoneNo').value;

    document.getElementById('emailIdT').innerHTML = document.getElementById('emailId').value;

    document.getElementById('nationalityT').innerHTML = document.getElementById('nationality').value;

    document.getElementById('linkedinT').innerHTML = document.getElementById('linkedin').value;

    document.getElementById('objectiveT').innerHTML = document.getElementById('objective').value;

    document.getElementById('workexpT').innerHTML = document.getElementById('workexp').value;

    document.getElementById('aqualT').innerHTML = document.getElementById('aqual').value;

    document.getElementById("form-cv").style.display='none'
    document.getElementById("final-cv").style.display='block'
    
}

function printCV() {
    document.getElementById('printcv').style.display='none';
    window.print();
    document.getElementById('printcv').style.display='block';
    document.getElementById('printcv').style.margin ='auto auto 10px';

}