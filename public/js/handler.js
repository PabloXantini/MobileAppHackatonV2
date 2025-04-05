function gotoDashBoard(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const pswd = document.getElementById("pswd").value;
    if(isValid(email,pswd)){
        window.location.href = './dashboard_lideres.html';
    } else {
        console.log("No puede ingresar")
    }
}

function isValid(email, pswd){
    if(email==='user@ejad.com.mx' && pswd==='user'){
        //console.log("Si")
        return true;
    }else{
        //console.log("No");
        return false
    }
}

document.getElementById("logininit").addEventListener('submit',(event)=>(gotoDashBoard(event)));