package com.BE.IMS.Controller;

import com.BE.IMS.DTO.LoginRequest;
import com.BE.IMS.DTO.SignupRequest;
import com.BE.IMS.Service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "*")   // Allow frontend to access backend
public class AuthController {

    @Autowired
    private AuthService authService;


    // ⭐ LOGIN ENDPOINT
    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        boolean success = authService.login(request);
        return success ? "Login successful" : "Invalid username or password";
    }


    // ⭐ SIGNUP ENDPOINT
    @PostMapping("/signup")
    public String signup(@RequestBody SignupRequest request) {
        return authService.signup(request);
    }
}
