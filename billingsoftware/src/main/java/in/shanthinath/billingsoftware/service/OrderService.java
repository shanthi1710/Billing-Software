package in.shanthinath.billingsoftware.service;

import in.shanthinath.billingsoftware.io.*;
import org.springframework.data.domain.Pageable;

import java.time.LocalDate;
import java.util.List;

public interface OrderService {

    OrderResponse createOrder(OrderRequest request);

    void deleteOrder(String orderId);

    List<OrderResponse> getLatestOrders();

    OrderResponse verifyPayment(PaymentVerificationRequest request);

    Double sumSalesByDate(LocalDate date);

    Long countByOrderDate(LocalDate date);

    List<OrderResponse> findRecentOrders();

    List<MonthlySales> getMonthlySales(int year);

    List<WeeklySales> getWeeklySales(int year);
}