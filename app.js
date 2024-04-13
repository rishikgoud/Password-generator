const inputbox = document.querySelector(".inputfield");
const lenght = 12;

const smalletter = 'abcdefghijklmnopqursvwxyz';
const capletter = "ABCDEFGHIJKLMNOPQRSVWXYZ";
const number = "0123456789";
const specialchar = "$!_";
const allchar = smalletter + capletter + number + specialchar;

function generate(){
    let pass = " ";
    pass += smalletter[Math.floor(Math.random()*smalletter.length)];
    pass += capletter[Math.floor(Math.random()*capletter.length)];
    pass += number[Math.floor(Math.random()*number.length)];
    pass += specialchar[Math.floor(Math.random()*specialchar.length)];

    while(lenght>pass.length){
        pass += allchar[Math.floor(Math.random()*allchar.length)];
    }
    inputbox.value = pass;
}

function copypassword(){
    inputbox.select();
    document.execCommand("copy");
}