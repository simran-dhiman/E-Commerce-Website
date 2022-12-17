package com.veggies.veggies_server.controller;

import com.veggies.veggies_server.model.Cart;
import com.veggies.veggies_server.model.CartItem;
import com.veggies.veggies_server.model.Product;
import com.veggies.veggies_server.model.User;
import com.veggies.veggies_server.service.VeggiesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
public class VeggiesController {

    @Autowired
    private VeggiesService veggiesService;

    @PostMapping("login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            user = veggiesService.login(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("register")
    public ResponseEntity<Object> register(@RequestBody User user) {
        try {
            veggiesService.register(user);
            return new ResponseEntity<>(user, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("home-products")
    public ResponseEntity<Map<String, List<Product>>> getHomeProducts() {
        Map<String, List<Product>> products = veggiesService.getHomeProducts();
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("get-products-by-category/{category}")
    public ResponseEntity<List<Product>> getProductsByCategory(@PathVariable String category) {
        List<Product> products = veggiesService.getProductsByCategory(category);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @GetMapping("get-products-by-brand/{brand}")
    public ResponseEntity<List<Product>> getProductsByBrand(@PathVariable String brand) {
        List<Product> products = veggiesService.getProductsByBrand(brand);
        return new ResponseEntity<>(products, HttpStatus.OK);
    }

    @PostMapping("add-to-cart/{userId}/{prodId}")
    public ResponseEntity<Object> addToCart(@PathVariable int userId, @PathVariable int prodId) {
        try {
            veggiesService.addToCart(userId, prodId);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("update-cart")
    public ResponseEntity<Object> updateCart(@RequestBody CartItem cartItem) {
        try {
//            veggiesService.addToCart(cartItem);
            return new ResponseEntity<>(HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("cart/{userId}")
    public ResponseEntity<List<Cart>> getCart(@PathVariable int userId) {
        return new ResponseEntity<>(veggiesService.getCart(userId), HttpStatus.OK);
    }

    @PostMapping("update-cart-item")
    public ResponseEntity<Object> updateCartItem(@RequestBody Cart cart) {
        try {
            veggiesService.updateCartItem(cart);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("remove-item-from-cart/{cartId}")
    public ResponseEntity<Object> removeItemFromCart(@PathVariable Integer cartId) {
        try {
            veggiesService.removeItemFromCart(cartId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}
