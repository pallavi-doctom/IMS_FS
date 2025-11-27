package com.BE.IMS.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "shipments")
public class Shipment {

    @Id
    private String shipmentId;

    private String productId;
    private int quantity;
    private String destination;
    private String shipmentDate;

    public Shipment() {}

    public Shipment(String shipmentId, String productId, int quantity, String destination, String shipmentDate) {
        this.shipmentId = shipmentId;
        this.productId = productId;
        this.quantity = quantity;
        this.destination = destination;
        this.shipmentDate = shipmentDate;
    }

    public String getShipmentId() { return shipmentId; }
    public void setShipmentId(String shipmentId) { this.shipmentId = shipmentId; }

    public String getProductId() { return productId; }
    public void setProductId(String productId) { this.productId = productId; }

    public int getQuantity() { return quantity; }
    public void setQuantity(int quantity) { this.quantity = quantity; }

    public String getDestination() { return destination; }
    public void setDestination(String destination) { this.destination = destination; }

    public String getShipmentDate() { return shipmentDate; }
    public void setShipmentDate(String shipmentDate) { this.shipmentDate = shipmentDate; }
}
