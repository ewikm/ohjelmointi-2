const nimet = [];
let i = 1;

while (nimet.length < 5) {
    const nimi = prompt("Anna nimi " + i + "/5:");
    nimet.push(nimi);
    i++;
}
document.querySelector("#tulos").innerHTML = nimet 

document.querySelector("#vika").innerHTML = nimet[nimet.length-1];

nimet.sort();
document.querySelector("#sort").innerHTML =nimet[0];
nimet.shift();
document.querySelector("#shift").innerHTML = nimet;
