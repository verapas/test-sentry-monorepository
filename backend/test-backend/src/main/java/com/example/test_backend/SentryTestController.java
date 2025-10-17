package com.example.test_backend;

import io.sentry.Sentry;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SentryTestController {

    @GetMapping("/sentry-test")
    public ResponseEntity<String> captureHandledException() {
        try {
            throw new Exception("This is a test.");
        } catch (Exception e) {
            Sentry.captureException(e);
            return ResponseEntity.ok("Handled exception wurde an Sentry gesendet.");
        }
    }

    @GetMapping("/sentry-unhandled")
    public String throwUnhandledException() {
        throw new RuntimeException("This is an unhandled test exception.");
    }
}

