package com.veggies.veggies_server.repository;

import com.veggies.veggies_server.entity.CartEntity;
import com.veggies.veggies_server.entity.ProductEntity;
import com.veggies.veggies_server.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Repository
@Transactional
public interface CartRepository extends JpaRepository<CartEntity, Integer> {

    Optional<List<CartEntity>> findAllByUserEntity(UserEntity entity);
    Optional<CartEntity> findByUserEntityAndProductEntity(UserEntity user, ProductEntity product);

}
