const list = {
    "firstname": "jaison",
    "lastname": "M",
    "age": "23",
    "qulification": ["10", "12", "BE", "MCA"],
    "skils": ["java", "c", "javascript", "HTML5","CSS3"]
}
//for looping:-
for (let i = 0; i < list.skils.length; i++) {
    console.log(list.skils[i]);
}
//for in looping:-
for (let j in list) {
    console.log(j,list[j]);
}
//for of looping:-
for (let k of list.qulification) {
    console.log(k);
}
console.log(`            Q1 is end         `);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//Q2.create a own resume data in json format;

const resume={
    "name":{
    "firstName":"Jaison",
    "lastName":"M",
    },
    "DOB":"2-11-1989",
    "passOut":"2011",
    "university":"vels university",
    "qulification":["10","12","BE","MCA"],
    "skils":["c","java","html5","css3","javascript","communication"],
    "currentWorking":"Student",
    "role":"Webdevloper",
    "workingExperience":"1year",
    "address":{
        "street":"doss Street",
        "area":"kodambakkam",
        "city":"Chennai",
        "state":"Tamilnadu",
        "contry":"India"
    },
    "extraActivety":{
        "hobby":["reading","coding","problemSolving","photography"],
        },
    "salaryExpatation":"2LPA"
}
console.log(resume);
// console.log(resume.name);
// console.log(resume.DOB);
// console.log(resume.address.street,resume.address.area,resume.address.city,resume.address.state,resume.address.contry);
// console.log();
console.log(`            Q2 is end         `);