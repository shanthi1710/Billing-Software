package in.shanthinath.billingsoftware.service;

import in.shanthinath.billingsoftware.io.UserRequest;
import in.shanthinath.billingsoftware.io.UserResponse;

import java.util.List;

public interface UserService {

    UserResponse createUser(UserRequest request);

    String getUserRole(String email);

    List<UserResponse> readUsers();

    void deleteUser(String id);
}
