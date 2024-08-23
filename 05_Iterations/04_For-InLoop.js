console.log('For-In Loop In JS');

/* ------------ For-In Loop ----------- */

/* ++++++++ For-In Loop Start +++++++++ */

const Prog_lang = {
    py: 'Python',
    js: 'JavaScript',
    c: 'C',
    cpp: 'C++',
    cs: 'C#',
    java: 'Java',
    php: 'PHP',
    r: 'R',
    ru: 'Ruby',
    rs: 'Rust',
    go: 'Go',
    dart: 'Dart',
    swift: 'Swift'
}

for (const key in Prog_lang) {
    // console.log(`${Prog_lang[key]} File Extention is .${key} `);
}

const prgramin_arr = ['js','py','java']

for (const key in prgramin_arr) {
    // console.log(key);
}


/* ######## Maps In For-In Loop ####### */

const map = new Map()
map.set("Pak", "Pakisatn")
map.set("IND", "India")
map.set("Ban", "Bangladesh") 

for (const key in map) {
    // console.log(key);
}

/* +++++++++ For-In Loop End ++++++++++ */