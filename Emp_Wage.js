
console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const workingDaysPerMonth = 20;

let totalWage = 0;
let dailyWageArray = [];
let employeeRecords = [];

for (let day = 1; day <= workingDaysPerMonth; day++) {
    let employeeAttendance;
    let check = Math.floor(Math.random() * 3);

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
    let hoursWorked = 0;

    switch (employeeAttendance) {
        case "Part-Time":
            employeeWage = wagePerHour * partTimeHours;
            hoursWorked = partTimeHours;
            break;
        case "Full-Time":
            employeeWage = wagePerHour * fullDayHours;
            hoursWorked = fullDayHours;
            break;
    }

    dailyWageArray.push(employeeWage);
    totalWage += employeeWage;

    let record = {
        day: day,
        hoursWorked: hoursWorked,
        wageEarned: employeeWage
    };
    employeeRecords.push(record);
}

console.log("Daily Wage Array: " + dailyWageArray);
console.log("Total Wage for the Month: " + totalWage  + "$");
console.log("Employee Records: ", employeeRecords);