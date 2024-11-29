package com.igor.apineuro.service;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import com.igor.apineuro.entity.Employee;
import com.igor.apineuro.repository.EmployeeRepository;

@Service
public class EmployeeService {

	public final EmployeeRepository employeeRepository;

	public EmployeeService(EmployeeRepository employeeRepository) {
		this.employeeRepository = employeeRepository;
	}

	
	
	public List<Employee> findAll() {
		return employeeRepository.findAll(); 
	}
	
	public ResponseEntity<Employee> getEmployeeById(long id){
		return employeeRepository.findById(id)
				.map(employee -> ResponseEntity.ok(employee))
				.orElse(ResponseEntity.notFound().build());
	}
	
	public Employee createEmployee(Employee employee) {
		return employeeRepository.save(employee); 
	}
	
	public void deleteEmployee (Long id) {
		employeeRepository.deleteById (id); 
	}

	public ResponseEntity<Employee> updateEmployee(Long id, Employee employee) {
		return employeeRepository.findById(id).map(employeeToSave -> {
			employeeToSave.setName(employee.getName());
			employeeToSave.setPhone(employee.getPhone()); 
			employeeToSave.setCompetence(employee.getCompetence());
			employeeToSave.setCertification(employee.getCertification());
			employeeToSave.setEmail(employee.getEmail()); 
			employeeToSave.setLinkedinUrl(employee.getLinkedinUrl()); 
			employeeToSave.setExperienceTime(employee.getExperienceTime()); 
			return ResponseEntity.ok(employeeRepository.save(employeeToSave)); 
		}).orElse(ResponseEntity.notFound().build());
	}

	
}
