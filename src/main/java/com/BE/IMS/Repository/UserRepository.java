package com.BE.IMS.Repository;

import com.BE.IMS.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    // For Login (existing field)
    Optional<User> findByUsername(String username);

    // For Signup (new field)
    Optional<User> findByEmail(String email);
}
