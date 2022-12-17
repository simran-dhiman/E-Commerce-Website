package com.veggies.veggies_server.repository;

import com.veggies.veggies_server.entity.BrandEntity;
import com.veggies.veggies_server.entity.ProductCategoryEntity;
import com.veggies.veggies_server.entity.ProductEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface ProductRepository extends JpaRepository<ProductEntity, Integer> {

    List<ProductEntity> findByProductCategoryEntity(ProductCategoryEntity entity);
    List<ProductEntity> findByBrandEntity(BrandEntity entity);

}
