package com.main.assignmenttracker.dtos;

import com.main.assignmenttracker.entities.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDTO {
    private Long user_id;
    private String username;
    private String email;
    private String gender;
    private String location;
    private String password;
    private String confirmPassword;
    private RoleDTO role;

}
