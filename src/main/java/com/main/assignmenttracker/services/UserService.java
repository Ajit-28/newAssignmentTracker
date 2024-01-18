package com.main.assignmenttracker.services;

import com.main.assignmenttracker.entities.User;
import com.main.assignmenttracker.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    UserRepo userRepo;

    public User saveUser (User user) {
        return userRepo.save(user);
    }
}
