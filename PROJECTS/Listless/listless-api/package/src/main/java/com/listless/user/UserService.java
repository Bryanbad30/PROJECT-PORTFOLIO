package com.listless.user;

import java.util.List;

public interface UserService {
    List<User> getAllUsers();

    Object createUser(User user);

    User updateUser(long id, User user);

    void deleteUser(long id);

    User getUserById(long id);
}
