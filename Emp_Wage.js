
console.log("Welcome To EmployeeWage!!");

const wagePerHour = 20;
const fullDayHours = 8;

let employeeAttendance;
let check = Math.floor(Math.random() * 2);

if (check !== 0) {
    employeeAttendance = "Present";
} else {
    employeeAttendance = "Absent";
}

let employeeWage = 0;

if (employeeAttendance === "Present") {
    employeeWage = wagePerHour * fullDayHours;
}

console.log("Employee Attendance: " + employeeAttendance);
console.log("Employee Wage: " + employeeWage);