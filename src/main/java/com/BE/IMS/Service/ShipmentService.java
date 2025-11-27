package com.BE.IMS.Service;

import com.BE.IMS.DTO.ShipmentRequest;
import com.BE.IMS.Entity.Shipment;
import com.BE.IMS.Repository.ShipmentRepository;
import org.springframework.stereotype.Service;

@Service
public class ShipmentService {

    private final ShipmentRepository shipmentRepository;

    public ShipmentService(ShipmentRepository shipmentRepository) {
        this.shipmentRepository = shipmentRepository;
    }

    public Shipment createShipment(ShipmentRequest request) {
        Shipment shipment = new Shipment(
                request.getShipmentId(),
                request.getProductId(),
                request.getQuantity(),
                request.getDestination(),
                request.getShipmentDate()
        );

        return shipmentRepository.save(shipment);
    }
}
