package com.BE.IMS.Repository;

import com.BE.IMS.Entity.Settings;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface SettingsRepository extends JpaRepository<Settings, Long> {

    Optional<Settings> findByUserId(String userId);

    Optional<Settings> findByEmail(String email);
}
