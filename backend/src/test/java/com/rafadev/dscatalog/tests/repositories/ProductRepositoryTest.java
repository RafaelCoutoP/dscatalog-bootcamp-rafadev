package com.rafadev.dscatalog.tests.repositories;

import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import com.rafadev.dscatalog.entities.Product;
import com.rafadev.dscatalog.repositories.ProductRepository;
import com.rafadev.dscatalog.tests.factory.ProductFactory;

@DataJpaTest
public class ProductRepositoryTest {

	@Autowired
	private ProductRepository repository;
	
	private long existingId;
	private long nonExistingId;
	private long totalCount;
	private long countPcGamer;
	private PageRequest pageRequest; 
	
	
	@BeforeEach
	void setUp() throws Exception {
		existingId = 1L;
		nonExistingId = 1000L;
		totalCount = 25L;
		countPcGamer = 21L;
		pageRequest = PageRequest.of(0, 10);	
	}
	
	
	@Test
	public void findShouldReturnAllProductsWhenNameIsEmpty() {
	
		String name = "";
		
		Page<Product> result = repository.find(null, name, pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(totalCount, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExistIgnoreCase() {
	
		String name = "pC gaMEr";
		
		Page<Product> result = repository.find(null, name, pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPcGamer, result.getTotalElements());
	}
	
	@Test
	public void findShouldReturnProductsWhenNameExist() {
	
		String name = "PC Gamer";
		
		Page<Product> result = repository.find(null, name, pageRequest);
		
		Assertions.assertFalse(result.isEmpty());
		Assertions.assertEquals(countPcGamer, result.getTotalElements());
	}
	
	@Test
	public void saveShouldPersistWithAutoincrementWhenIdIsNull() {
		
		Product product = ProductFactory.createProduct();
		product.setId(null);
		
		product = repository.save(product);
		Optional<Product> result = repository.findById(product.getId());
		
		Assertions.assertNotNull(product.getId());
		Assertions.assertEquals(totalCount + 1L, product.getId());
		Assertions.assertTrue(result.isPresent());
		Assertions.assertSame(result.get(), product); //Same = apontar para a mesma referência
		
	}
	
	@Test
	public void deleteShouldDeleteObjectWhenIdExists() {
		
		repository.deleteById(existingId);
		
		Optional<Product> result = repository.findById(existingId);
		
		Assertions.assertFalse(result.isPresent());
	}
	
	@Test
	public void deleteShouldThrowEmptyResultDataAccessExceptionWhenIdDoesNotExist() {
		
		Assertions.assertThrows(EmptyResultDataAccessException.class, () -> {
			repository.deleteById(nonExistingId);	
		});
	}
}
