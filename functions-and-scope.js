// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6
console.log("opdracht 1a, hoeveel studenten zijn Cum Laude geslaagd?")
let studentCumLaude = 0;
for (let participants = 0; participants < grades.length; participants++) {
    if (grades[participants] > 7) {
        studentCumLaude = studentCumLaude + 1
    }
}
console.log("We hebben "+ studentCumLaude + " speciale diploma's nodig.");

/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
console.log("opdracht 1b")
function cumLaude (gradeArray) {
    let studentCumLaude = 0;
    for (let participants = 0; participants < gradeArray.length; participants++) {
        if (gradeArray[participants] > 7) {
            studentCumLaude = studentCumLaude + 1
        }
    }
    return studentCumLaude;
}
cumLaude(grades);

console.log(studentCumLaude);

//wat als ik meerdere verzamelingen van grades heb? Bijvoorbeeld: grades1969 en grades1970?
//hieronder een voorbeeld hoe je de functie voor meerdere arrays (grades en grades2) kan toepassen:

console.log("opdracht 1c functie geschikt voor meerdere arrays met elk hun eigen naaam")
const grades2 = [9, 3, 5, 7, 7, 4, 3, 8, 3, 3, 6, 3, 5, 6];
//grades is al eerder gedefinieerd
studentCumLaude = 0; //let is niet meer nodig want al eerder gedeclareerd
function cumLade (gradeArray) {
    for (let participants = 0; participants < gradeArray.length; participants++) {
        if (gradeArray[participants] > 7) {
            studentCumLaude = studentCumLaude + 1
        }
    }
    return studentCumLaude;
}
cumLade(grades);
console.log(studentCumLaude);

studentCumLaude = 0;
cumLade(grades2);
console.log(studentCumLaude);


// ---- Verwachte uitkomsten:
// studentCumLaude(grades) geeft 6
// studentCumLaude([6, 4, 5]) geeft 0
// studentCumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend? // de waarde van alle entries optellen en delen door het aantal entries
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen? // de som en de lengte van de array
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten? for loop van 0 tot array.length-1
// Log het antwoord in de terminal.

console.log("opdracht 2, gemiddelden")
//declareer de variabele sumOfGrades
let sumOfGrades = 0;
//for loop die door de array itereert
for(let i =0; i<grades.length; i++) {
    //alle arraywaardes optellen
    sumOfGrades += grades[i];
}
//gemiddelde uitrekenen
const averageGrade = sumOfGrades/grades.length;
//gemiddelde loggen in de console
console.log(averageGrade);

// ---- Verwachte uitkomst: 6.642857142857143


/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.
console.log("opdracht 2b gemiddelden in een herbruikbare functie")
function classAverage () {
    let sumOfGrades = 0;

    for(let i = 0; i < (grades.length); i++) {
        sumOfGrades += grades[i];

    }
    const averageGrade = sumOfGrades/(grades.length);
    return averageGrade;
}
classAverage(grades);
console.log(classAverage());

//andere aanpak:
console.log("opdracht 2b maar dan met een array-prototype en reduce functie om waarden op te tellen")
Array.prototype.classAverage = function () {
    return this.reduce((r, g) => r + g, 0) / (this.length || 1); //voorkomt foutmelding bij length 0 (delen door nul)
};

const grades1 = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];
const grades1999 = [1, 3, 5, 7, 2, 4, 3];
const grades2020 = [5, 6, 7, 8, 2, 3, 4, 5, 6, 7, 8];
const grades2023 = [];

console.log(grades1.classAverage());
console.log(grades1999.classAverage());
console.log(grades2020.classAverage());
console.log(grades2023.classAverage());

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx


/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!

console.log("opdracht 2c afronden van een variabele op twee cijfers achter de komma")
let roundedAverage = Math.round(classAverage()*100)/100;
console.log(roundedAverage);



/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9

console.log("Bonus hoogste cijfer")
let highestGrade = 0;
for(let i = 0; i< grades.length; i++) { //for loop zo vaak als dat de array lang is
    //als de i'de waarde van de array hoger is dan highestGrade, update dan highestGrade met i'de waarde
    if(grades[i]>highestGrade) {
        highestGrade = grades[i]
    }
}
console.log(highestGrade)

/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10

console.log("Bonus hoogste cijfer herschrijven naar een herbruikbare functie")


