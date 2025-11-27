package com.BE.IMS.Service;

import com.BE.IMS.DTO.ForecastRequest;
import org.springframework.stereotype.Service;

@Service
public class ForecastService {

    public String generateForecast(ForecastRequest request) {
        // You can replace this mock result with real ML logic later
        return "Forecast generated for product: " + request.getProductName() +
               " using model: " + request.getForecastModel();
    }
}
