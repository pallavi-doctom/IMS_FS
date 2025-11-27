package com.BE.IMS.Service;

import com.BE.IMS.DTO.LoginRequest;
import com.BE.IMS.DTO.SignupRequest;
import com.BE.IMS.Entity.User;
import com.BE.IMS.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;


    // ⭐ LOGIN LOGIC
    public boolean login(LoginRequest request) {
        User user = userRepository.findByUsername(request.getUsername()).orElse(null);

        if (user == null) {
            return false;
        }

        // Simple password check (no hashing yet)
        return user.getPassword().equals(request.getPassword());
    }


    // ⭐ SIGNUP LOGIC
    public String signup(SignupRequest request) {

        // 1. Check password match
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return "Passwords do not match";
        }

        // 2. Check if email already exists
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            return "Email already registered";
        }

        // 3. Auto-generate username from email (since frontend has no username field)
        String username = request.getEmail().split("@")[0];

        // If username already exists, add timestamp for uniqueness
        if (userRepository.findByUsername(username).isPresent()) {
            username = username + System.currentTimeMillis();
        }

        // 4. Create user
        User user = new User();
        user.setUsername(username);
        user.setFullName(request.getFullName());
        user.setEmail(request.getEmail());
        user.setPassword(request.getPassword());

        // 5. Save user
        userRepository.save(user);

        return "Signup successful! Your username is: " + username;
    }
}
