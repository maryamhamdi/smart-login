var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPassInput = document.getElementById("userPass");
var signEmailInput = document.getElementById("signEmail");
var signPassInput = document.getElementById("signPass");
var users ;


if(localStorage.getItem("usersList")==null){
    var users=[];
}
else{
    users = JSON.parse(localStorage.getItem("usersList"));
}


function addUserName(){
    if(!checkedInput()){
        if(exist()){
            displayExist();
        }
        else{
        var user = {
            name:userNameInput.value,
            email:userEmailInput.value,
            password:userPassInput.value,
        }
        users.push(user);
        localStorage.setItem("usersList",JSON.stringify(users));
        displaySucess()
        
    }
        
    }
    else{
        displayRequired();
    }
   
   
};

function displayRequired(){
    document.getElementById("requir").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};

function displayExist(){
    document.getElementById("requir").innerHTML=`<span class=' text-danger'>email already exists</span>`;

};

function displayIncorrect(){
    document.getElementById("result-signin").innerHTML=`<span class=' text-danger'>incorrect email or password</span>`;
};

function displayRequiredSign(){
    document.getElementById("result-signin").innerHTML=`<span class=' text-danger'>All inputs is required</span>`;
};

function displaySucess(){
    document.getElementById("requir").innerHTML=`<span class=' text-success'>Success</span>`;
};

function  welcome(){
    document.getElementById("welcome").innerHTML = `Welcome ${JSON.parse(localStorage.getItem("homeList"))}`;
};

function exist(){
    for(var i=0;i<users.length;i++){
        if(users[i].email==userEmailInput.value ){
            return true; 
        }
    }
    return false;
}

function existLogin(){
for(var i=0;i<users.length;i++){
    if(users[i].email==signEmailInput.value && users[i].password==signPassInput.value){
        console.log(users[i].name);
        var name=users[i].name;
        localStorage.setItem("homeList",JSON.stringify(name));
        location.replace("home.html");       
       return true;
    }
}
};

function searchUser(){
    if(checkIsEmptySign()){
        displayRequiredSign();
    }
    else{
        if( existLogin()){

        }
        else{
            displayIncorrect();
        }
        
    }

};

function clear(){
   userNameInput.value="";
   userEmailInput.value="";
   userPassInput.value="";
};

function checkedInput(){
    if(userNameInput.value!="" && userPassInput.value !="" && userEmailInput.value !=""){
        return false;
    }
    else{
        return true;
    }
}

function checkIsEmptySign(){
    if(signEmailInput.value =="" || signPassInput.value =="" ){
        return true;
    }
    else{
        return false;
    }
}

