package com.veggies.veggies_server.util;

import com.veggies.veggies_server.entity.CartEntity;
import com.veggies.veggies_server.entity.UserEntity;
import com.veggies.veggies_server.model.Cart;
import com.veggies.veggies_server.model.User;

public class DtoToEntityUtil {

    public static CartEntity convertDtoToEntity(Cart cart) {
        CartEntity cartEntity = new CartEntity();
//        cartItemEntity.setUserEntity(userEntity);
//        cartItemEntity.setProductEntity(productEntity);
        cartEntity.setQuantity(cart.getQuantity());
//        cartItemEntity.setPrice(productEntity.getPrice() * cartItem.getQuantity());
//        cartItemEntity.setProdInStock(productEntity.get);

        return cartEntity;
    }

    public static UserEntity convertDtoToEntity(User user) {
        UserEntity entity = new UserEntity();
        entity.setFirstName(user.getFirstName());
        entity.setLastName(user.getLastName());
        entity.setEmail(user.getEmail());
        entity.setPassword(user.getPassword());

        return entity;
    }
}
