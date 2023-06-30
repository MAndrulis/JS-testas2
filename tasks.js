/*
1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)
2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)
8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)
9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.) (10 taškų)
10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
"(XXX) XXX-XXXX". (10 taškų)
*/

// 1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs.

const a = 15;
const b = 9;

if (a > b) {
    console.log('a yra didesnis');
} else if (a < b) {
    console.log('b yra didesnis');
} else {
    console.log('a ir b yra lygus');
}



// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}    

console.log('-----------');

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje.

for (let i = 0; i < 5; i++) {
    const random = Math.floor(Math.random() * 10);
    console.log(random);
}

// 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5.

let i = 0;
for (let i = 1; i <= 10; i++) {
    console.log(i);
} while (i < 5) {
    i++;
}


// 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų.

const masyvas = [];

for (let i = 0; i < 30; i++) {
    masyvas.push(Math.floor(Math.random() * 20 + 10));
}

let rez = 0;

for (let i = 0; i < masyvas.length; i++) {
    if (rez < masyvas[i]) {
        rez = masyvas[i];
    }
}

console.log(rez);



// 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės.

const masyvas2 = [];

let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

for (let i = 0; i < 100; i++) {
    masyvas2.push(Math.floor(Math.random() * 4));
}

for (let i = 0; i < masyvas2.length; i++) {
    if (masyvas2[i] === 0) {
        masyvas2[i] = 'A';
        count1++;
    } else if (masyvas2[i] === 1) {
        masyvas2[i] = 'B';
        count2++;
    } else if (masyvas2[i] === 2) {
        masyvas2[i] = 'C';
        count3++;
    } else if (masyvas2[i] === 3) {
        masyvas2[i] = 'D';
        count4++;
    } 
}

console.log(`a: ${count1}, b: ${count2}, c: ${count3}, d: ${count3}`);


// 8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
// Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė.

function lygineSuma(param1, param2) {
    if (
      (typeof param1 !== "number" && !Array.isArray(param1)) ||
      (typeof param2 !== "number" && !Array.isArray(param2))
    ) {
      return "Kintamieji nėra tinkami";
    }
  
    const suma =
      (Array.isArray(param1) ? param1.length : param1) +
      (Array.isArray(param2) ? param2.length : param2);
  
    return suma % 2 === 1 ? "Suma nelyginė" : suma;
  }
  
  console.log(lygineSuma(4, 6));
  console.log(lygineSuma(8, 0));
  console.log(lygineSuma([4, 5, 10], [1, 2]));
  console.log(lygineSuma([1, 1, 1], [1, 2]));


// 9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius. Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis
// skaičius yra tas, kuris dalinasi tik iš savęs ir tik iš vieneto be liekanos.)

function pirminisSkaicius(number) {
    if (typeof number !== "number" || !Number.isInteger(number) || number <= 1) {
      return false;
    }
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  console.log(pirminisSkaicius(2));
  console.log(pirminisSkaicius(10));
  console.log(pirminisSkaicius(5));
  console.log(pirminisSkaicius(29));
  console.log(pirminisSkaicius(12));

// 10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai, ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - 
// "(XXX) XXX-XXXX".

function telefonoNumeris(a) {
    let rez = '';
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] !== 'number' || !isFinite(a[i]) || a[i].length > 1) {
            return `Netinkantys masyvo elementai`
        } else {
            rez += a[i];
        }
    }
    return `(${rez[0]}${rez[1]}${rez[2]}) ${rez[3]}${rez[4]}${rez[5]}-${rez[6]}${rez[7]}${rez[8]}${rez[9]}`;
}
