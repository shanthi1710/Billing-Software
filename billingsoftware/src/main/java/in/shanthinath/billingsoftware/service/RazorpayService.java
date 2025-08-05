package in.shanthinath.billingsoftware.service;

import com.razorpay.RazorpayException;
import in.shanthinath.billingsoftware.io.RazorpayOrderResponse;


public interface RazorpayService {

    RazorpayOrderResponse createOrder(Double amount, String currency) throws RazorpayException;
}

