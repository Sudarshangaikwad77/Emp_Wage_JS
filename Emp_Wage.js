
console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;

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

console.log("Employee Attendance: " + employeeAttendance);
console.log("Employee Wage: " + employeeWage);