let hour = 00;
let minute = 00;
let second =00;
let cron;



function iniciar(){
        cron = setInterval(() => {
            cronometro();
            document.getElementById('hour').innerText=returnData(hour);
            document.getElementById('minute').innerText=returnData(minute);
            document.getElementById('second').innerText=returnData(second);
        },1000);

}

function pausar(){
    clearInterval(cron);
    document.getElementById('hour').innerText = '00'
    document.getElementById('minute').innerText = '00'
    document.getElementById('second'),innerText ='00'
}

function parar() {
        hour = 0;
    minute =0;
    second =0;
    

    document.getElementById('hour').innerText = '00'
    document.getElementById('minute').innerText = '00'
    document.getElementById('second'),innerText ='00'
}

function cronometro() {
     second=second+1

    if (second ==60) {
        second= 0;
        minute++;
    }

    if (minute==60){
        minute =0;
        hour++;
    }
    document.getElementById('hour').innerText = '00'
    document.getElementById('minute').innerText = '00'
    document.getElementById('second'),innerText ='00'
   }



function returnData(input){
    if (input>=10) {
    return input
    } else {
        return "0" + input
    }
    }

