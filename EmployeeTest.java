// Base class
class Employee {
    int empId;
    String empName;
    double basicSalary;

    void displayEmpInfo() {
        System.out.println("Employee ID: " + empId);
        System.out.println("Employee Name: " + empName);
        System.out.println("Basic Salary: " + basicSalary);
    }

    double calculateSalary() {
        double da = 0.5 * basicSalary;   // Dearness Allowance
        double hra = 0.35 * basicSalary; // House Rent Allowance
        double salary = basicSalary + da + hra;
        return salary;
    }
}

// Subclass
class Manager extends Employee {
    double bonus;

    double totalSalary() {
        double baseSalary = calculateSalary();
        return baseSalary + bonus;
    }

    void displayManagerInfo() {
        displayEmpInfo();
        System.out.println("Bonus: " + bonus);
        System.out.println("Total Salary: " + totalSalary());
    }
}

// Main class
public class EmployeeTest {
    public static void main(String[] args) {
        Manager obj = new Manager();
        obj.empId = 101;
        obj.empName = "Ayush";
        obj.basicSalary = 20000;
        obj.bonus = 5000;

        System.out.println("=== Employee Details ===");
        obj.displayManagerInfo();
    }
}
