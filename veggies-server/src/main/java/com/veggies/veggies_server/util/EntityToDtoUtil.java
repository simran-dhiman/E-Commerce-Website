package com.veggies.veggies_server.util;

import com.veggies.veggies_server.entity.*;
import com.veggies.veggies_server.model.*;

public class EntityToDtoUtil {

    public static User convertEntityToDto(UserEntity entity) {
        User user = new User();
        user.setId(entity.getId());
        user.setFirstName(entity.getFirstName());
        user.setLastName(entity.getLastName());
        user.setEmail(entity.getEmail());
        return user;
    }

    public static Product convertEntityToDto(ProductEntity entity) {
        Product product = new Product();
        product.setId(entity.getId());
        product.setName(entity.getName());
        product.setPrice(entity.getPrice());
        product.setQuantity(entity.getQuantity());
        product.setMeasureUnit(entity.getMeasureUnit());
        product.setImagePath(entity.getImagePath());
        product.setBrand(convertEntityToDto(entity.getBrandEntity()));
        product.setProductCategory(convertEntityToDto(entity.getProductCategoryEntity()));
        return product;
    }

    public static ProductCategory convertEntityToDto(ProductCategoryEntity entity) {
        ProductCategory productCategory = new ProductCategory();
        productCategory.setId(entity.getId());
        productCategory.setCategory(entity.getCategory());
        return productCategory;
    }

    public static Brand convertEntityToDto(BrandEntity entity) {
        Brand brand = new Brand();
        brand.setId(entity.getId());
        brand.setBrand(entity.getBrand());
        return brand;
    }

    public static Cart convertEntityToDto(CartEntity entity) {
        Cart cart = new Cart();
        cart.setId(entity.getId());
        cart.setQuantity(entity.getQuantity());
        return cart;
    }

}
