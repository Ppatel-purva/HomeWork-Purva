function getBdateStr(num) {
    let year = 0;
    let months = 0;
    if (num > 365) {
        year = Math.floor(num/365);
        num = num-(year*365);
    }
    if (num > 30) {

        months = Math.floor(num/30);
        num = num - (months * 30)
    }

    return "You are " + year + " years " + months + " months " + num  + " days old."
}

function calculateAge() {
    userBirthDate = new Date(document.getElementById("bDate").value);
    today = new Date();
    document.getElementById("userAge").innerHTML = getBdateStr(Math.floor(((today - userBirthDate)/(1000 * 3600 * 24))));
   
}