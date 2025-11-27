package com.BE.IMS.Controller;

import com.BE.IMS.DTO.ForecastRequest;
import com.BE.IMS.Service.ForecastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/forecast")
@CrossOrigin(origins = "*")
public class ForecastController {

    @Autowired
    private ForecastService forecastService;

    @PostMapping("/run")
    public String runForecast(@RequestBody ForecastRequest request) {
        return forecastService.generateForecast(request);
    }
}
