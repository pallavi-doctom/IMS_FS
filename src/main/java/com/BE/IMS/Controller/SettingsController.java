package com.BE.IMS.Controller;

import com.BE.IMS.Entity.Settings;
import com.BE.IMS.Service.SettingsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
@CrossOrigin(origins = "*")
public class SettingsController {

    @Autowired
    private SettingsService service;

    // Get settings by userId
    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getByUserId(@PathVariable String userId) {
        return service.findByUserId(userId)
                .map(settings -> ResponseEntity.ok().body(settings))
                .orElseGet(() -> ResponseEntity.status(404).body(null));

    }

    // Get settings by email
    @GetMapping("/by-email")
    public ResponseEntity<?> getByEmail(@RequestParam String email) {
        return service.findByEmail(email)
                .map(settings -> ResponseEntity.ok().body(settings))
                .orElseGet(() -> ResponseEntity.status(404).body(null));

    }

    // Save Settings (create or update)
    @PostMapping("/save")
    public ResponseEntity<?> saveSettings(@RequestBody Settings settings) {
        Settings saved = service.save(settings);
        return ResponseEntity.ok(saved);
    }
}
