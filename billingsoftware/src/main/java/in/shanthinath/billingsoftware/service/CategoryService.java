package in.shanthinath.billingsoftware.service;

import in.shanthinath.billingsoftware.io.CategoryRequest;
import in.shanthinath.billingsoftware.io.CategoryResponse;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request, MultipartFile file);
    List<CategoryResponse> read();

    void delete(String categoryId);
}
