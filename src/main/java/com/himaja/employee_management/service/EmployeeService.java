// package com.himaja.employee_management.service;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.himaja.employee_management.entity.Employee;
// import com.himaja.employee_management.repository.EmployeeRepository;

// @Service
// public class EmployeeService {

//     @Autowired
//     private EmployeeRepository employeeRepository;

//     // CREATE
//     public Employee saveEmployee(Employee employee) {
//         return employeeRepository.save(employee);
//     }

//     // READ ALL
//     public List<Employee> getAllEmployees() {
//         return employeeRepository.findAll();
//     }

//     // READ BY ID
//     public Employee getEmployeeById(Long id) {
//         return employeeRepository.findById(id).orElse(null);
//     }

//     // DELETE
//     public void deleteEmployee(Long id) {
//         employeeRepository.deleteById(id);
//     }
// }

package com.himaja.employee_management.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.himaja.employee_management.entity.Employee;
import com.himaja.employee_management.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    // CREATE
    public Employee saveEmployee(Employee saveEmployee) {

        System.out.println("========== RECEIVED ==========");
        System.out.println(saveEmployee.getName());
        System.out.println(saveEmployee.getEmail());
        System.out.println(saveEmployee.getPhone());
        System.out.println(saveEmployee.getDepartment());
        System.out.println(saveEmployee.getSalary());

        return employeeRepository.save(saveEmployee);
    }
    // public Employee saveEmployee(Employee employee) {
    //     return employeeRepository.save(employee);
    // }

    // READ ALL
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    // READ BY ID
    public Employee getEmployeeById(Long id) {
        return employeeRepository.findById(id).orElse(null);
    }

    // UPDATE
    public Employee updateEmployee(Long id, Employee employee) {

        Employee existingEmployee = employeeRepository.findById(id).orElse(null);

        if (existingEmployee != null) {

            existingEmployee.setName(employee.getName());
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setPhone(employee.getPhone());
            existingEmployee.setDepartment(employee.getDepartment());
            existingEmployee.setSalary(employee.getSalary());

            return employeeRepository.save(existingEmployee);
        }

        return null;
    }

    // DELETE
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }

}