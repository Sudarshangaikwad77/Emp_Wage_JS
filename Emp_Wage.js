
console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const workingDaysPerMonth = 20;

let totalWage = 0;
let totalHoursWorked = 0;
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
    totalHoursWorked += hoursWorked;

    let record = {
        day: day,
        hoursWorked: hoursWorked,
        wageEarned: employeeWage
    };
    employeeRecords.push(record);
}

console.log("Daily Wage Array: " + dailyWageArray);
console.log("Total Wage for the Month: " + totalWage);
console.log("Employee Records: ", employeeRecords);

// a. Calc total Wage and total hours worked using arrow functions
const calcTotal = (accumulator, record) => accumulator + record.wageEarned;
const totalWageUsingArrow = employeeRecords.reduce(calcTotal, 0);
const totalHoursWorkedUsingArrow = employeeRecords.reduce((acc, record) => acc + record.hoursWorked, 0);

console.log("Total Wage for the Month (using arrow function): " + totalWageUsingArrow);
console.log("Total Hours Worked (using arrow function): " + totalHoursWorkedUsingArrow);

// b. Show the full working days using forEach and arrow function
console.log("Full Working Days (using forEach):");
employeeRecords.forEach(record => {
    if (record.hoursWorked === fullDayHours) {
        console.log("Day " + record.day);
    }
});

// c. Show the part working days using Map and reducing to a string array
const partWorkingDays = employeeRecords
    .filter(record => record.hoursWorked === partTimeHours)
    .map(record => "Day " + record.day);

console.log("Part Working Days (using Map):", partWorkingDays);

// d. Show the non-working days using Map function
const nonWorkingDays = employeeRecords
    .filter(record => record.hoursWorked === 0)
    .map(record => "Day " + record.day);

console.log("Non-working Days (using Map):", nonWorkingDays);