
var mSecId = document.getElementById("m_sec");
var secId = document.getElementById("sec");
var minId = document.getElementById("mints");
var hoursId = document.getElementById("hours");
var startbtnId = document.getElementById("startbtn");
var stopId = document.getElementById("stop");

var mSecValue = 0;
var secValue = 0;
var minValue = 0;
var hoursValue = 0;


function timer()
{   
    mSecValue++;
    mSecId.innerHTML = mSecValue; 
    if(mSecValue >= 100){
        mSecValue = 0;
        secValue++;
        secId.innerHTML = secValue;
        if(secValue >= 60){
            secValue=0;
            minValue++;
            minId.innerHTML = minValue;
            if(minValue >=60){
                hoursValue++;
                hoursId.innerHTML =hoursValue;
            }

        }
    }

}
var DataArr=[];

function SubmitUserName(){
    var userNameId = document.getElementById("userName");
    if(userNameId.value != ""){ 
    var userName = userNameId.value;
    userNameId.value="";
    DataArr.push({userName,mSecValue,secValue,minValue,hoursValue});

    var ele = '<ul>'
    DataArr.forEach(element => {
        ele += `
        <div>
        <li>Name = ${element.userName}</li>
        <li>H = ${element.hoursValue}</li>
        <li>M = ${element.minValue}</li>
        <li>S = ${element.secValue}</li>
        <li>MS = ${element.mSecValue}</li> 
        </div>      
        <hr>
        `
    });
    ele  += '</ul>';
    document.getElementById("dataContainer").innerHTML = ele;    
}
else{
    alert("please type your Name");
}
}

var interVal;
function start(){
 interVal = setInterval(timer,10);
 startbtnId.setAttribute("disabled","");
 stopId.removeAttribute("disabled");
}
function stop(){
    clearInterval(interVal);
    stopId.setAttribute("disabled","");
    startbtnId.removeAttribute("disabled");
}
function clearIt(){
mSecId.innerHTML=0;
secId.innerHTML=0;
minId.innerHTML=0;
hoursId.innerHTML=0;
stop();
}


// waqas ali4:30 PM
// var username = "abc";
// var result = 12;

// let results = [];

// results.push({username, result})
// results.forEach(ele=> {console.log(ele.username); console.log(ele.result)});