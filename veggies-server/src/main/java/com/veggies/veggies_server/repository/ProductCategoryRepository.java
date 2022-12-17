package com.veggies.veggies_server.repository;

import com.veggies.veggies_server.entity.ProductCategoryEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.transaction.Transactional;

@ResponseBody
@Transactional
public interface ProductCategoryRepository extends JpaRepository<ProductCategoryEntity, Integer> {

    ProductCategoryEntity findByCategory(String category);

}
