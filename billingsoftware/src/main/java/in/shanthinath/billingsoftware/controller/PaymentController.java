package in.shanthinath.billingsoftware.controller;

import com.razorpay.RazorpayException;
import in.shanthinath.billingsoftware.io.OrderResponse;
import in.shanthinath.billingsoftware.io.PaymentRequest;
import in.shanthinath.billingsoftware.io.PaymentVerificationRequest;
import in.shanthinath.billingsoftware.io.RazorpayOrderResponse;
import in.shanthinath.billingsoftware.service.OrderService;
import in.shanthinath.billingsoftware.service.RazorpayService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final in.shanthinath.billingsoftware.service.RazorpayService razorpayService;
    private final OrderService orderService;

    @PostMapping("/create-order")
    @ResponseStatus(HttpStatus.CREATED)
    public RazorpayOrderResponse createRazorpayOrder(@RequestBody PaymentRequest request) throws RazorpayException {
        return razorpayService.createOrder(request.getAmount(), request.getCurrency());
    }

    @PostMapping("/verify")
    public OrderResponse verifyPayment(@RequestBody PaymentVerificationRequest request) {
        return orderService.verifyPayment(request);
    }
}