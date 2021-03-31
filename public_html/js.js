window.addEventListener("load", init);

function $(nev) {
    return document.querySelectorAll(nev);
}

//var kepek = ["kepek/asztal.jpg","kepek/bogre.jpg","kepek/feny.jpg"];
//var kepekCimek = ["1. kép címe","2. kép címe","3. kép címe"];
//var kepLeiras = ["1. kép leírása","2. kép leírása","3. kép leírása"];

var kep1 = {
    eleresiut: "kepek/asztal.jpg",
    cím: "1. kép címe",
    leiras: "1. kép leírása"
};

var kep2 = {
    eleresiut: "kepek/bogre.jpg",
    cím: "2. kép címe",
    leiras: "2. kép leírása"
};

var kep3 = {
    eleresiut: "kepek/feny.jpg",
    cím: "3. kép címe",
    leiras: "3. kép leírása"
};

var kepek = [kep1, kep2, kep3];
var index = 0;

function init() {

    for (var i = 0; i < kepek.length; i++) {
        var elem = '<div> <h3></h3> <img id="' + i + '" src="" alt=""/> <p></p> </div>';
        $("article")[0].innerHTML += elem;
    }

    var kepekElemTomb = $("article div img");
    var cimElemTomb = $("article div h3");
    var leirasElemTomb = $("article div p");

    alert("itt a js");

    for (var i = 0; i < $("article div img").length; i++) {
//        kepekElemTomb[i].src = kepek[i]["eleresiut"];     //ez is jó hivatkozás [""]-al
        kepekElemTomb[i].src = kepek[i].eleresiut;     //ez is jó hivatkozás [""]-al
        cimElemTomb[i].innerHTML = kepek[i].cím;          //és ez is jó hivatkozás .-al
        leirasElemTomb[i].innerHTML = kepek[i].leiras;
    }
    for (var i = 0; i < $("article div img").length; i++) {
 //       kepekElemTomb[i].addEvenetListener("click", kepCsere);
        consol.log($("article div img")[i]);

    }

    for (var i = 0; i < kepekElemTomb.length; i++) {
        $("section button #bal").addEventListener("click", kepValtas1);
        $("section button #jobb").addEventListener("click", kepValtas2);

    }
}

function kepValtas1() {
    $("#nagykep img")[0].src = kepek[index].eleresiut;
    $("#nagykep h3")[0].innerHTML = kepek[index].cím;
    $("#nagykep p")[0].innerHTML = kepek[index].leiras;
    index--;
    if (index < 0) {
        index = kepek.length - 1;
    }

}

function kepValtas2() {
    $("#nagykep img")[0].src = kepek[index].eleresiut;
    $("#nagykep h3")[0].innerHTML = kepek[index].cím;
    $("#nagykep p")[0].innerHTML = kepek[index].leiras;
    index++;
    if (index > kepek.length - 1) {
        index = 0;
    }
}

function kepCsere() {
    var i = this.id;
    $("#nagykep img")[0].src = kepek[i].eleresiut;
    $("#nagykep h3")[0].innerHTML = kepek[i].cím;
    $("#nagykep p")[0].innerHTML = kepek[i].leiras;
}