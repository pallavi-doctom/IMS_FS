package com.BE.IMS.Service;

import com.BE.IMS.Entity.Settings;
import com.BE.IMS.Repository.SettingsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class SettingsService {

    @Autowired
    private SettingsRepository repository;

    public Optional<Settings> findByUserId(String userId) {
        return repository.findByUserId(userId);
    }

    public Optional<Settings> findByEmail(String email) {
        return repository.findByEmail(email);
    }

    public Settings save(Settings settings) {
        return repository.save(settings);
    }
}
