setInterval(function() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var hour=date.getHours();
    var pm=hour>12?"PM":"AM";
    var hrs=()=>{
        if(hour>12){
            return hour-12;
        }
        else if(hour==0){
            return 12;
        }
        else{
            return hour;
        }
    }
    var hour=hrs();
    hour=hour<10?"0"+hour:hour;
    var minute=date.getMinutes();
    minute=minute<10?"0"+minute:minute;
    var second=date.getSeconds();
    second=second<10?"0"+second:second;
    month=month<10?"0"+month:month;
    var today=date.getDay();
    today=today==0?"Sunday":today==1?"Monday":today==2?"Tuesday":today==3?"Wednesday":today==4?"Thursday":today==5?"Friday":"Saturday";
    document.getElementById("year").innerHTML=year;
    document.getElementById("month").innerHTML=month+"/ ";
    document.getElementById("day").innerHTML=day+"/ ";
    document.getElementById("today").innerHTML=today;
    document.getElementById("hour").innerHTML=hour+": ";
    document.getElementById("minute").innerHTML=minute+": ";
    document.getElementById("second").innerHTML=second+" ";
    document.getElementById("pm").innerHTML=pm;
    document.getElementById("today").style.color=second%2==0?"#1bb6d1":"orange";
    document.getElementById("hour").style.color=second%2==0?"#1bb6d1":"red";
    document.getElementById("minute").style.color=second%3==0?"blue":"#1bb6d1";
    document.getElementById("second").style.color=second%2==0?"red":"#1bb6d1";
    
},100);