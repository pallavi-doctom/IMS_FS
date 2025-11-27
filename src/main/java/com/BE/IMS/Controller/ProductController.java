package com.BE.IMS.Controller;

import com.BE.IMS.DTO.ProductRequest;
import com.BE.IMS.DTO.QuickUpdateRequest;
import com.BE.IMS.Entity.Product;
import com.BE.IMS.Service.ProductService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    // Add or patch-update product (used by AddProducts.js and Inventory.js Save Item)
    @PostMapping("/add")
    public ResponseEntity<?> addOrUpdate(@RequestBody ProductRequest request) {
        try {
            Product saved = service.addOrUpdate(request);
            return ResponseEntity.ok(saved);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    // Patch-style update endpoint (alias)
    @PatchMapping("/update")
    public ResponseEntity<?> update(@RequestBody ProductRequest request) {
        try {
            Product saved = service.addOrUpdate(request);
            return ResponseEntity.ok(saved);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(ex.getMessage());
        }
    }

    // Quick update (used by Home.js quick form)
    @PostMapping("/quick-update")
    public ResponseEntity<?> quickUpdate(@RequestBody QuickUpdateRequest qreq) {
        try {
            Product updated = service.quickUpdate(qreq);
            return ResponseEntity.ok(updated);
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(404).body(ex.getMessage());
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<Product>> getAll() {
        List<Product> all = service.getAll();
        return ResponseEntity.ok(all);
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> getOne(@PathVariable String productId) {
        return service.getById(productId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.status(404).body(null));
    }
}
