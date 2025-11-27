package com.BE.IMS.Controller;

import com.BE.IMS.DTO.ShipmentRequest;
import com.BE.IMS.Service.ShipmentService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/shipments")
@CrossOrigin("*")
public class ShipmentController {

    private final ShipmentService shipmentService;

    public ShipmentController(ShipmentService shipmentService) {
        this.shipmentService = shipmentService;
    }

    @PostMapping("/create")
    public String createShipment(@RequestBody ShipmentRequest request) {
        shipmentService.createShipment(request);
        return "Shipment Created Successfully!";
    }
}
