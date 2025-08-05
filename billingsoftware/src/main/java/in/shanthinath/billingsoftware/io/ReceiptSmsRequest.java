package in.shanthinath.billingsoftware.io;

import lombok.Data;

@Data
public class ReceiptSmsRequest {
    private String customerName;
    private String phoneNumber;
    private Double amount;
}
