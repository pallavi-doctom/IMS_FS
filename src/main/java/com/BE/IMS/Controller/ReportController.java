package com.BE.IMS.Controller;

import com.BE.IMS.Service.ReportService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reports")
@CrossOrigin(origins = "*")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @PostMapping("/export")
    public void exportReport(
            @RequestParam String reportType,
            @RequestParam String startDate,
            @RequestParam String endDate,
            @RequestParam String fileFormat,
            HttpServletResponse response
    ) {
        reportService.generateReport(reportType, startDate, endDate, fileFormat, response);
    }
}
