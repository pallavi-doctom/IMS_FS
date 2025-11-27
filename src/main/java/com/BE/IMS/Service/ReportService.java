package com.BE.IMS.Service;

import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

@Service
public class ReportService {

    public void generateReport(String reportType, String startDate, String endDate,
                               String fileFormat, HttpServletResponse response) {

        try {
            String fileName = reportType + "_report." + fileFormat;

            // --- Fake sample file content (replace with actual DB logic later) ---
            String sampleContent = 
                    "Report Type: " + reportType + "\n" +
                    "Start Date: " + startDate + "\n" +
                    "End Date: " + endDate + "\n" +
                    "Generated: OK\n";

            byte[] fileBytes = sampleContent.getBytes(StandardCharsets.UTF_8);

            // Set headers
            response.setContentType("application/octet-stream");
            response.setHeader("Content-Disposition", "attachment; filename=" + fileName);

            // Write bytes to output
            response.getOutputStream().write(fileBytes);
            response.getOutputStream().flush();

        } catch (IOException e) {
            throw new RuntimeException("Failed to generate report");
        }
    }
}
