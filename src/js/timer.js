function showTime() {
    const date = new Date('2024-09-27 23:38:00');
    const today = new Date();
    let difference = today - date;

    let seconds = Math.floor(difference / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    let months = Math.floor(days / 30);
    let years = Math.floor(months / 12);

    months%=12;
    days%=30;
    hours%=24;
    minutes%=60;
    seconds%=60;

    let time = `${years} anos, ${months} meses, ${days} dias, ${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos`;

    document.querySelector('.timer').innerHTML = time;
}

function pad(value){
    return (value < 10) ? '0' + value : value;
}

setInterval(showTime, 1000);

showTime();