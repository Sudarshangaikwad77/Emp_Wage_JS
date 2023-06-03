
console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const workingDaysPerMonth = 20;

let totalWage = 0;
let dailyWageMap = new Map();

for (let day = 1; day <= workingDaysPerMonth; day++) {
    let employeeAttendance;
    let check = Math.floor(Math.random() * 3); // Generate random number between 0 and 2

    switch (check) {
        case 0:
            employeeAttendance = "Absent";
            break;
        case 1:
            employeeAttendance = "Part-Time";
            break;
        case 2:
            employeeAttendance = "Full-Time";
            break;
        default:
            employeeAttendance = "Invalid";
    }

    let employeeWage = 0;

    switch (employeeAttendance) {
        case "Part-Time":
            employeeWage = wagePerHour * partTimeHours;
            break;
        case "Full-Time":
            employeeWage = wagePerHour * fullDayHours;
            break;
    }

    dailyWageMap.set("Day " + day, employeeWage);
    totalWage += employeeWage;
}

console.log("Daily Wage Map: ", dailyWageMap);
console.log("Total Wage for the Month: " + totalWage);