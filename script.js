const form = document.querySelector('form');
form.addEventListener('submit' , (event) =>{
    event.preventDefault();
    const mail = document.getElementById('mail').value;
    if (!mail){
        alert ('Veuillez remplir le champ svp ?');
        return;
    }
    else{
        alert('Contact enrégistré, nous vous contacterons pour un suivi.');
        form.reset();
    }

});