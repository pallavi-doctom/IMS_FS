package com.BE.IMS.Service;

import com.BE.IMS.DTO.ProductRequest;
import com.BE.IMS.DTO.QuickUpdateRequest;
import com.BE.IMS.Entity.Product;
import com.BE.IMS.Repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repo;

    public ProductService(ProductRepository repo) {
        this.repo = repo;
    }

    // Create or update (PATCH-style). If product exists, update only provided fields.
    public Product addOrUpdate(ProductRequest req) {
        if (req.getProductId() == null || req.getProductId().isBlank()) {
            throw new IllegalArgumentException("productId is required");
        }

        Optional<Product> opt = repo.findByProductId(req.getProductId());
        Product p = opt.orElseGet(Product::new);

        // If new product, ensure productId set
        if (p.getProductId() == null) {
            p.setProductId(req.getProductId());
        }

        // Patch-style updates (only when non-null)
        if (req.getProductName() != null) p.setProductName(req.getProductName());
        if (req.getProductCategory() != null) p.setProductCategory(req.getProductCategory());
        if (req.getDescription() != null) p.setDescription(req.getDescription());
        if (req.getSupplier() != null) p.setSupplier(req.getSupplier());
        if (req.getProductStock() != null) p.setProductStock(req.getProductStock());
        if (req.getProductPrice() != null) p.setProductPrice(req.getProductPrice());
        if (req.getWarehouse() != null) p.setWarehouse(req.getWarehouse());
        if (req.getStatus() != null) p.setStatus(req.getStatus());
        if (req.getReorderLevel() != null) p.setReorderLevel(req.getReorderLevel());

        if (req.getExpiryDate() != null) {
            try {
                LocalDate d = LocalDate.parse(req.getExpiryDate()); // expects YYYY-MM-DD
                p.setExpiryDate(d);
            } catch (Exception ex) {
                // ignore parse error (could also throw)
            }
        }

        // Defaults: if productStock null for new product, set 0
        if (p.getProductStock() == null) p.setProductStock(0);

        return repo.save(p);
    }

    public List<Product> getAll() {
        return repo.findAll();
    }

    public Optional<Product> getById(String productId) {
        return repo.findByProductId(productId);
    }

    // Quick update: quantity is delta (add). Option A.
    public Product quickUpdate(QuickUpdateRequest q) {
        if (q.getProductId() == null || q.getProductId().isBlank()) {
            throw new IllegalArgumentException("productId is required");
        }

        Product p = repo.findByProductId(q.getProductId())
                .orElseThrow(() -> new IllegalArgumentException("Product not found: " + q.getProductId()));

        // Apply quantity delta if provided
        if (q.getQuantity() != null) {
            int existing = p.getProductStock() == null ? 0 : p.getProductStock();
            int updated = existing + q.getQuantity();
            if (updated < 0) updated = 0;
            p.setProductStock(updated);
        }

        if (q.getWarehouse() != null) p.setWarehouse(q.getWarehouse());
        if (q.getStatus() != null) p.setStatus(q.getStatus());

        return repo.save(p);
    }
}
