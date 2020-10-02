package com.rafadev.dscatalog.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.rafadev.dscatalog.entities.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
