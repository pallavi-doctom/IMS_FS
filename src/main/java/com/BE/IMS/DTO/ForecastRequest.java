package com.BE.IMS.DTO;

public class ForecastRequest {
    private String productName;
    private String startDate;
    private String endDate;
    private String forecastModel;
    private int historicalData;

    public ForecastRequest() {}

    public ForecastRequest(String productName, String startDate, String endDate,
                           String forecastModel, int historicalData) {
        this.productName = productName;
        this.startDate = startDate;
        this.endDate = endDate;
        this.forecastModel = forecastModel;
        this.historicalData = historicalData;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getEndDate() {
        return endDate;
    }

    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }

    public String getForecastModel() {
        return forecastModel;
    }

    public void setForecastModel(String forecastModel) {
        this.forecastModel = forecastModel;
    }

    public int getHistoricalData() {
        return historicalData;
    }

    public void setHistoricalData(int historicalData) {
        this.historicalData = historicalData;
    }
}
