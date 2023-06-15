"use strict";
function display(data) {
    console.log(data);
}
let employee;
let EmployeeWithArray = [];
function EmployeeWithDefaultVal(id, name, isPermanent = false) {
    employee = [id, name, isPermanent];
    EmployeeWithArray.push(employee);
}
function UpdateEmployees(id, name, isPermanent) {
    var empfind = EmployeeWithArray.find(employee => employee[0] === id);
    if (empfind) {
        if (isPermanent !== undefined) {
            empfind[1] = name;
            empfind[2] = isPermanent;
            display(`Employee with ID Number: ${id} is updated`);
        }
        else {
            empfind[1] = name;
            display(`Employee with ID  Number: ${id} is updated`);
        }
    }
    else {
        display("No employee with this ID");
    }
}
EmployeeWithDefaultVal(1, 'Pavitr', true);
EmployeeWithDefaultVal(40, 'Miles');
EmployeeWithDefaultVal(60, 'Miguel');
EmployeeWithDefaultVal(92, 'Hobbie', true);
EmployeeWithDefaultVal(71, 'J. Jonah Jameson');
display('Employees with set and default values');
display(EmployeeWithArray);
UpdateEmployees(71, 'Gwen');
UpdateEmployees(92, 'Peter', true);
UpdateEmployees(132, 'Peni Parker', false);
display('Employees after update');
display(EmployeeWithArray);
function TypeAssertion() {
    var StringOfIds = EmployeeWithArray.map(employee => [employee[0], employee[1], employee[2]]);
    StringOfIds.push(['30', 'Noir', true]);
    display(StringOfIds);
}
TypeAssertion();
// let employee:[number, string, boolean];
// let EmployeesWithArray:[number, string, boolean][]=[];
// const EmployeesWithDefaultVals=(id:number,name:string,isPermanent:boolean=false)=>{
//     employee=[id,name,isPermanent];
//     EmployeesWithArray.push(employee);
// }
// const UpdatedEmployee=(id:number,isPermanent?:boolean)=>{
//     const employee = EmployeesWithArray.find(employee=>employee[0]===id)
//     if (employee) {
//         if(isPermanent){
//             employee[2]=isPermanent;
//             console.log(`Employee with id ${id} updated`);
//         }else{
//             console.log(`employee with id ${id} not updated`);
//         }
//     }else{
//         console.log(`We don't have data of employee with id ${id}`);
//     }
// }
// EmployeesWithDefaultVals(1,"Pavitr");
// EmployeesWithDefaultVals(2,"Hobbie",true);
// EmployeesWithDefaultVals(3,"Peni",false);
// EmployeesWithDefaultVals(4,"Miguel",true);
// EmployeesWithDefaultVals(5,"Miles");
// console.log("Employees with default value");
// console.log(EmployeesWithArray);
// UpdatedEmployee(1,true);
// UpdatedEmployee(2);
// console.log(EmployeesWithArray);
// const typeAssertionExample=()=>{
//     let stringIdEmps = EmployeesWithArray.map(e=>[(e[0]) as any as String,e[1],e[2]])
//     stringIdEmps.push(["6","srb",true]);
//     console.log(stringIdEmps);
// }
// typeAssertionExample();
//# sourceMappingURL=index.js.map