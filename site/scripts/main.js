let myHeading=document.querySelector('h1');
let myButton=document.querySelector('button')
function setUserName(){
    let usrName=prompt("My name is___");
    if(!usrName || usrName===null)
        setUserName();
    localStorage.setItem('name',usrName);
    myHeading.textContent= '欢迎 '+usrName+'!';
}
if(!localStorage.getItem('name')){
    setUserName();
}
else{
    myHeading.textContent='欢迎 '+localStorage.getItem('name')+'!';
}
myButton.onclick=function(){
    setUserName();
}