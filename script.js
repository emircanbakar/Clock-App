let hour = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(() => {
    let day = new Date();
    let hr = day.getHours() * 30 ;
    let mn = day.getMinutes() * 6 ;
    let sc = day.getSeconds() * 6 ;

    hour.style.transform = `rotateZ(${hr+(mn/12)}deg) `;
    min.style.transform = `rotateZ(${mn}deg) `;
    sec.style.transform = `rotateZ(${sc}deg) `;


    let hours = document.getElementById("hours");
    let minutes = document.getElementById("minutes");
    let seconds = document.getElementById("seconds");
    let ampm = document.getElementById("ampm");

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();

    let am = h  >= 12 ? "PM" : "AM" ;

    if (h > 12){
        h = h - 12;
    }

    h = (h < 10 ) ? "0" + h : h
    m = (m < 10 ) ? "0" + m : m
    s = (s < 10 ) ? "0" + s : s

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;


    
})


