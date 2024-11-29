package com.igor.apineuro.controller;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.igor.apineuro.entity.Employee;
import com.igor.apineuro.service.EmployeeService;

@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	private final EmployeeService employeeService; 
	
	public EmployeeController(EmployeeService employeeService) {
		this.employeeService = employeeService;
	}

	@GetMapping
	public List<Employee> getALLEmployee() {
		return employeeService.findAll(); 
	}
	@GetMapping ("/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
		return employeeService.getEmployeeById(id);
		
	}
	
	@PostMapping
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeService.createEmployee(employee); 
	}
	
    @DeleteMapping ("/{id}")
    public ResponseEntity<?> deleteEmployee (@PathVariable Long id){
    	employeeService.deleteEmployee(id);
    	return ResponseEntity.noContent().build();
    }

	 @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(
            @PathVariable Long id,
            @RequestBody Employee updatedEmployee) {
        return employeeService.updateEmployee(id, updatedEmployee);
	}
}
