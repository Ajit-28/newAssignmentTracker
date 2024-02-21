package com.main.assignmenttracker.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "user_tbl")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long user_id;
    private String username;
    private String email;
    private String gender;
    private String location;
    private String password;
    private String confirmPassword;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id", referencedColumnName = "id")
    private Role role;


}
