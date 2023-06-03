
console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;
const partTimeHours = 4;

let employeeAttendance;
let check = Math.floor(Math.random() * 3);

if (check === 0) {
    employeeAttendance = "Absent";
} else if (check === 1) {
    employeeAttendance = "Part-Time";
} else {
    employeeAttendance = "Full-Time";
}

let employeeWage = 0;

if (employeeAttendance === "Part-Time") {
    employeeWage = wagePerHour * partTimeHours;
} else if (employeeAttendance === "Full-Time") {
    employeeWage = wagePerHour * fullDayHours;
}

console.log("Employee Attendance: " + employeeAttendance);
console.log("Employee Wage: " + employeeWage);