package com.veggies.veggies_server.service;

import com.veggies.veggies_server.entity.*;
import com.veggies.veggies_server.model.*;
import com.veggies.veggies_server.repository.*;
import com.veggies.veggies_server.util.DtoToEntityUtil;
import com.veggies.veggies_server.util.EntityToDtoUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class VeggiesService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private ProductCategoryRepository productCategoryRepository;

    @Autowired
    private BrandRepository brandRepository;

    @Autowired
    private CartRepository cartRepository;

    public User login(User user) {
        UserEntity entity = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword()).orElseThrow();
        return EntityToDtoUtil.convertEntityToDto(entity);
    }

    public void register(User user) {
        UserEntity entity = DtoToEntityUtil.convertDtoToEntity(user);
        userRepository.save(entity);
    }

    public List<Product> getProductsByCategory(String category) {
        ProductCategoryEntity entity = productCategoryRepository.findByCategory(category);
        List<ProductEntity> entityList = productRepository.findByProductCategoryEntity(entity);

        List<Product> productList = new ArrayList<>();
        for (com.veggies.veggies_server.entity.ProductEntity e : entityList) {
            productList.add(EntityToDtoUtil.convertEntityToDto(e));
        }

        return productList;
    }

    public List<Product> getProductsByBrand(String brand) {
        BrandEntity entity = brandRepository.findByBrand(brand);
        List<ProductEntity> entityList = productRepository.findByBrandEntity(entity);

        List<Product> productList = new ArrayList<>();
        for (ProductEntity e : entityList) {
            productList.add(EntityToDtoUtil.convertEntityToDto(e));
        }

        return productList;
    }

    public void addToCart(int userId, int prodId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow();
        ProductEntity productEntity = productRepository.findById(prodId).orElseThrow();

        CartEntity entity = cartRepository.findByUserEntityAndProductEntity(userEntity, productEntity).orElse(new CartEntity());
        entity.setUserEntity(userEntity);
//        List<ProductEntity> productList = entity.getProductEntity() == null ? new ArrayList<>() : entity.getProductEntity();
//        productList.add(productEntity);
        entity.setProductEntity(productEntity);
        entity.setQuantity(entity.getQuantity() + 1);
        entity.setPrice(productEntity.getPrice() * entity.getQuantity());

        cartRepository.saveAndFlush(entity);
    }

    public List<Cart> getCart(int userId) {
        UserEntity userEntity = userRepository.findById(userId).orElseThrow();
        List<CartEntity> cartList = cartRepository.findAllByUserEntity(userEntity).orElse(new ArrayList<>());

        return cartList.stream().map(entity -> {
            Cart cart = EntityToDtoUtil.convertEntityToDto(entity);
            cart.setUser(EntityToDtoUtil.convertEntityToDto(entity.getUserEntity()));
            cart.setProduct(EntityToDtoUtil.convertEntityToDto(entity.getProductEntity()));
            cart.setQuantity(entity.getQuantity());
            return cart;
        }).collect(Collectors.toList());
    }

    public void updateCartItem(Cart cart) {
        CartEntity entity = cartRepository.findById(cart.getId()).orElseThrow();
        entity.setQuantity(cart.getQuantity());
        entity.setPrice(entity.getProductEntity().getPrice() * cart.getQuantity());

        cartRepository.saveAndFlush(entity);
    }

    public void removeItemFromCart(Integer cartId) {
        cartRepository.deleteById(cartId);
    }

    public Map<String, List<Product>> getHomeProducts() {
        List<ProductEntity> bestSellingVeggiesEntities = productRepository.findAllById(List.of(1, 2, 10, 13));
        List<ProductEntity> bestSellingFruitsEntities = productRepository.findAllById(List.of(24, 18, 17, 16));
        List<ProductEntity> dealsOfTheDayEntities = productRepository.findAllById(List.of(39, 21, 57, 28));
        List<ProductEntity> readyToEatFoodEntities = productRepository.findAllById(List.of(83, 84, 85, 86));


        List<Product> bestSellingVeggies = bestSellingVeggiesEntities.stream().map(EntityToDtoUtil::convertEntityToDto).collect(Collectors.toList());
        List<Product> bestSellingFruits = bestSellingFruitsEntities.stream().map(EntityToDtoUtil::convertEntityToDto).collect(Collectors.toList());
        List<Product> dealsOfTheDay = dealsOfTheDayEntities.stream().map(EntityToDtoUtil::convertEntityToDto).collect(Collectors.toList());
        List<Product> readyToEatFood = readyToEatFoodEntities.stream().map(EntityToDtoUtil::convertEntityToDto).collect(Collectors.toList());

        Map<String, List<Product>> products = new HashMap<>();
        products.put("bestSellingVeggies", bestSellingVeggies);
        products.put("bestSellingFruits", bestSellingFruits);
        products.put("dealsOfTheDay", dealsOfTheDay);
        products.put("readyToEatFood", readyToEatFood);

        return products;
    }
}
