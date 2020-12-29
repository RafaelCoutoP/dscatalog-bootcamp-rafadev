package com.rafadev.dscatalog.tests.services;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentMatchers;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.data.domain.PageImpl;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import com.rafadev.dscatalog.entities.Product;
import com.rafadev.dscatalog.repositories.ProductRepository;
import com.rafadev.dscatalog.services.ProductService;
import com.rafadev.dscatalog.services.exceptions.DatabaseException;
import com.rafadev.dscatalog.services.exceptions.ResourceNotFoundException;
import com.rafadev.dscatalog.tests.factory.ProductFactory;

@ExtendWith(SpringExtension.class) // não carrega o contexto da aplicação
public class ProductServiceTest {

	@InjectMocks
	private ProductService service;
	
	@Mock // usar quando o test não precisar carregar o contexto da aplicação
	private ProductRepository repository;
	
	private long existingId;
	private long nonExistingId;
	private long dependentId;
	private Product product;
	private PageImpl<Product> page;
	
	@BeforeEach
	void setUp() throws Exception{
		existingId = 1L;
		nonExistingId = 1000L;
		dependentId = 4L;
		product = ProductFactory.createProduct();
		page = new PageImpl<>(List.of(product));
		
		//Comportamento Find
		Mockito.when(repository.find(ArgumentMatchers.any(), ArgumentMatchers.anyString(), ArgumentMatchers.any()))
		.thenReturn(page); //ArgumentMatchers = qualquer valor.
		
		//Comportamento Save
		Mockito.when(repository.save(ArgumentMatchers.any())).thenReturn(product);
		
		// Comportamento FindById
		Mockito.when(repository.findById(existingId)).thenReturn(Optional.of(product));
		Mockito.when(repository.findById(nonExistingId)).thenReturn(Optional.empty());
		
		//Comportamento Delete
		Mockito.doNothing().when(repository).deleteById(existingId);
		Mockito.doThrow(EmptyResultDataAccessException.class).when(repository).deleteById(nonExistingId);
		Mockito.doThrow(DataIntegrityViolationException.class).when(repository).deleteById(dependentId);
	}
	
	
	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDependent() {
		
		Assertions.assertThrows(DatabaseException.class, () -> {
			service.delete(dependentId);
		});
		
		Mockito.verify(repository).deleteById(dependentId);
	}

	@Test
	public void deleteShouldThrowResourceNotFoundExceptionWhenIdDoesNotExists() {
		
		Assertions.assertThrows(ResourceNotFoundException.class, () -> {
			service.delete(nonExistingId);
		});
		
		Mockito.verify(repository).deleteById(nonExistingId);
	}
	
	@Test
	public void deleteShouldDoNothingWhenIdExists() {
		
		Assertions.assertDoesNotThrow(() -> {
			service.delete(existingId);	
		});
		
		Mockito.verify(repository, Mockito.times(1)).deleteById(existingId);
	}
}
