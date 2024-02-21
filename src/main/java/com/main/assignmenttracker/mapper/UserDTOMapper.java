package com.main.assignmenttracker.mapper;

import com.main.assignmenttracker.dtos.UserDTO;
import com.main.assignmenttracker.entities.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Component;

@Component
public class UserDTOMapper {

    private final RoleDTOMapper roleMapper;

    public UserDTOMapper(RoleDTOMapper roleMapper) {
        this.roleMapper = roleMapper;
    }

    public UserDTO mapToDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setUser_id(user.getUser_id());
        userDTO.setUsername(user.getUsername());
        userDTO.setEmail(user.getEmail());
        userDTO.setGender(user.getGender());
        userDTO.setLocation(user.getLocation());

        String password = user.getPassword();
        if (password != null) {
            userDTO.setPassword(new BCryptPasswordEncoder().encode(password));
        }

        String confirmPassword = user.getConfirmPassword();
        if (confirmPassword != null) {
            userDTO.setConfirmPassword(new BCryptPasswordEncoder().encode(confirmPassword));
        }

        userDTO.setRole(roleMapper.mapToDTO(user.getRole()));
        return userDTO;
    }


    public User mapToEntity(UserDTO userDTO) {
        User user = new User();
        user.setUser_id(userDTO.getUser_id());
        user.setUsername(userDTO.getUsername());
        user.setEmail(userDTO.getEmail());
        user.setGender(userDTO.getGender());
        user.setLocation(userDTO.getLocation());

        String password = userDTO.getPassword();
        if (password != null) {
            user.setPassword(new BCryptPasswordEncoder().encode(password));
        }

        String confirmPassword = userDTO.getConfirmPassword();
        if (confirmPassword != null) {
            user.setConfirmPassword(new BCryptPasswordEncoder().encode(confirmPassword));
        }

        user.setRole(roleMapper.mapToEntity(userDTO.getRole()));
        return user;
    }


    public void updateEntity(UserDTO userDTO, User existingUser) {
        existingUser.setUsername(userDTO.getUsername());
        existingUser.setEmail(userDTO.getEmail());
        existingUser.setGender(userDTO.getGender());
        existingUser.setLocation(userDTO.getLocation());

        existingUser.setPassword(new BCryptPasswordEncoder().encode(userDTO.getPassword()));

        String confirmPassword = userDTO.getConfirmPassword();
        if (confirmPassword != null) {
            existingUser.setConfirmPassword(new BCryptPasswordEncoder().encode(confirmPassword));
        }

        if (userDTO.getRole() != null && existingUser.getRole() != null) {
            roleMapper.updateEntity(userDTO.getRole(), existingUser.getRole());
        }
    }

}
