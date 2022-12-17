package com.veggies.veggies_server.repository;

import com.veggies.veggies_server.entity.BrandEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface BrandRepository extends JpaRepository<BrandEntity, Integer> {

        BrandEntity findByBrand(String brand);

}
