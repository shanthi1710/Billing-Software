package in.shanthinath.billingsoftware.service;

import in.shanthinath.billingsoftware.io.CategoryRequest;
import in.shanthinath.billingsoftware.io.CategoryResponse;

import java.util.List;

public interface CategoryService {
    CategoryResponse add(CategoryRequest request);
    List<CategoryResponse> read();

    void delete(String categoryId);
}
