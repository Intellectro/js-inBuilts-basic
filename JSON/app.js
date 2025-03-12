const obj = fetch("./index.json");
obj.then(data =>{
    data.json().then(obj => {
        const {employee} = obj;
        console.log(employee[2].firstname + " " + employee[2].lastname);
    });
});

const text = `{
    "employees" : [
        {"firstname" : "John", "lastname" : "Doe"},
        {"firstname" : "Mary", "lastname" : "Ann"},
        {"firstname" : "Intell", "lastname" : "Norm"}
    ]
}`;

const obj1 = JSON.parse(text);
const {employees} = obj1;
console.log(employees[2].firstname + " " + employees[2].lastname);