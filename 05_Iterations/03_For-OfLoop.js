console.log('For-Of Loop In JS');

/* --------- For-Of Loop Loops -------- */

/* +++++++++ For-Of Loop Start ++++++++ */

const arr = [1, 2, 3, 4, 5,]

for (const num of arr) {
    // console.log(num);
}


const string_arr = ['cricket', 'football', 'badminton']

for (const value of string_arr) {
    // console.log(value);
}


const greetings = "Hello World!"

for (const greetings_message of greetings) {
    // console.log(`Each Char is  ${greetings_message}`);
}

/* ######## Maps In For-Of Loop ####### */

const map = new Map()
{map.set('PAK', 'PAKISTAN')
map.set('PAK', 'PAKISTAN') // Map will not add it
map.set('IND', 'INDIA')
map.set('RUS', 'RUSSIA')
map.set('CHI', 'CHINA')
map.set('USA', 'UNITED STATES OF AMERICA')
map.set('BAN', 'BANGLADESH')
map.set('NEP', 'NEPAL')
map.set('BHU', 'BHUTAN')
map.set('JAP', 'JAPAN')
map.set('HKG', 'HONG KONG')
map.set('KOR', 'SOUTH KOREA')
map.set('PRK', 'NORTH KOREA')
map.set('SIN', 'SINGAPORE')
map.set('AUS', 'AUSTRALIA')
map.set('NZL', 'NEW ZEALAND')
map.set('CAN', 'CANADA')
map.set('MEX', 'MEXICO')
map.set('UK', 'UNITED KINGDOM')
map.set('FRA', 'FRANCE')
map.set('GER', 'GERMANY')
map.set('ITA', 'ITALY')
map.set('ESP', 'SPAIN')
map.set('POR', 'PORTUGAL')
map.set('SWE', 'SWEDEN')
map.set('NOR', 'NORWAY')
map.set('SUI', 'SWITZERLAND')
map.set('BRA', 'BRAZIL')
map.set('ECU', 'ECUADOR')
map.set('PER', 'PERU')
map.set('ARG', 'ARGENTINA')
map.set('CHL', 'CHILE')}

// console.log(map);

// for (const key of map) {
//     console.log(key);  
// }

// for (const [key] of map) {
//     console.log(key);  
// }

// for (const [, value] of map) {
//     console.log(value);  
// }

// for (const [key, value] of map) {
//     console.log(key, ':-', value);  
// }


// Maps are itraable in for of loop
// Objects are not itrateble in for of loop

const myObject = {
    'game1': 'Cricket',
    'game2': 'Football',
    'game3': 'Hockey',
    'game4': 'Tennis',
    'game5': 'Baseball',
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);  
// }

/* +++++++++ For-Of Loop End ++++++++++ */