class EmployeeWageCalculator {
    constructor(company, wagePerHour, numWorkingDays, maxWorkingHours) {
        this.part_time_hour = 4;
        this.full_day_hour = 8;
        this.totalWorkingDays = 0;
        this.totalWorkingHours = 0;
        this.monthlyWage = 0;
        this.company = company;
        this.wagePerHour = wagePerHour;
        this.numWorkingDays = numWorkingDays;
        this.maxWorkingHours = maxWorkingHours;
        this.totalWage = 0;
    }
  
    calculateWage() {
        console.log(`Calculating wage for company ${this.company}`);
        let dailyWage;
        while (this.totalWorkingDays < this.numWorkingDays && this.totalWorkingHours < this.maxWorkingHours) {
            const newAttendance = Math.floor(Math.random() * 3); // 0 for absent, 1 for part-time, 2 for full-time
            switch (newAttendance) {
                case 1:
                    dailyWage = this.wagePerHour * this.part_time_hour;
                    this.totalWorkingHours += this.part_time_hour;
                    break;
                case 2:
                    dailyWage = this.wagePerHour * this.full_day_hour;
                    this.totalWorkingHours += this.full_day_hour;
                    break;
                default:
                    dailyWage = 0;
                    break;
            }
            this.totalWorkingDays++;
            this.monthlyWage += dailyWage;
        }
        this.totalWage += this.monthlyWage;
        return this.monthlyWage;
    }
  
    getCompany() {
        return this.company;
    }
  
    getTotalWage() {
        return this.totalWage;
    }
  }
  
  class CompanyEmpWage {
    constructor(company, wagePerHour, numWorkingDays, maxWorkingHours) {
        this.company = company;
        this.wagePerHour = wagePerHour;
        this.numWorkingDays = numWorkingDays;
        this.maxWorkingHours = maxWorkingHours;
        this.totalWage = 0;
    }
  
    getTotalWage() {
        return this.totalWage;
    }
  
    getCompany() {
        return this.company;
    }
  
    getWagePerHour() {
        return this.wagePerHour;
    }
  
    getNumWorkingDays() {
        return this.numWorkingDays;
    }
  
    getMaxWorkingHours() {
        return this.maxWorkingHours;
    }
  
    setTotalWage(totalWage) {
        this.totalWage = totalWage;
    }
  }
  
  class EmpWageBuilder {
    constructor() {
        this.companies = [];
        this.numCompanies = 0;
    }
  
    addCompany(company, wagePerHour, numWorkingDays, maxWorkingHours) {
        const emp = new CompanyEmpWage(company, wagePerHour, numWorkingDays, maxWorkingHours);
        this.companies[this.numCompanies++] = emp;
    }
  
    computeWages() {
        for (let i = 0; i < this.numCompanies; i++) {
            const wage = new EmployeeWageCalculator(
                this.companies[i].getCompany(),
                this.companies[i].getWagePerHour(),
                this.companies[i].getNumWorkingDays(),
                this.companies[i].getMaxWorkingHours()
            ).calculateWage();
            this.companies[i].setTotalWage(wage);
            console.log(`Total wage for ${this.companies[i].getCompany()} is ${this.companies[i].getTotalWage()}`);
        }
    }
  }
  
  class EmpWage {
    static main() {
      const empWageBuilder = new EmpWageBuilder();
      empWageBuilder.addCompany("Company A", 20, 20, 100);
      empWageBuilder.addCompany("Company B", 25, 25, 120);
      empWageBuilder.computeWages();
  }
  }
  
  EmpWage.main();
  
    
    
  
  