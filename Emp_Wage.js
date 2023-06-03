
console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;
const workingDaysPerMonth = 20;

let totalWage = 0;
let dailyWageArray = [];

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

    switch (employeeAttendance) {
        case "Part-Time":
            employeeWage = wagePerHour * partTimeHours;
            break;
        case "Full-Time":
            employeeWage = wagePerHour * fullDayHours;
            break;
    }

    dailyWageArray.push(employeeWage);
    totalWage += employeeWage;
}

//Using Reduce and ForEach
let totalWageUsingReduce = dailyWageArray.reduce((total, wage) => total + wage, 0);
console.log("Daily Wage Array: " + dailyWageArray);
console.log("Total Wage for the Month (using reduce): " + totalWageUsingReduce);


//Using Map Functions

let dailyWageWithDay = dailyWageArray.map((wage, index) => `Day ${index + 1}: ${wage}`);
console.log("Daily Wage with Day: " + dailyWageWithDay);