package com.main.assignmenttracker.controllers;

import com.main.assignmenttracker.entities.User;
import com.main.assignmenttracker.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("v1/api")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/addUser")
    public User addProduct(@RequestBody User user) {

        return userService.saveUser(user);
    }
}
