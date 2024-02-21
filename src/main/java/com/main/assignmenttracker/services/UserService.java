package com.main.assignmenttracker.services;

import com.main.assignmenttracker.dtos.UserDTO;
import com.main.assignmenttracker.entities.Role;
import com.main.assignmenttracker.entities.User;
import com.main.assignmenttracker.mapper.UserDTOMapper;
import com.main.assignmenttracker.repository.RoleRepo;
import com.main.assignmenttracker.repository.UserRepo;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepo userRepo;
    private  final RoleRepo roleRepo;
    private final UserDTOMapper userDTOMapper;

    public UserService(UserRepo userRepo, RoleRepo roleRepo, UserDTOMapper userDTOMapper) {
        this.userRepo = userRepo;
        this.roleRepo = roleRepo;
        this.userDTOMapper = userDTOMapper;
    }

    public UserDTO saveUser(UserDTO userDTO) {
        User user = mapToEntity(userDTO);
        Role address = user.getRole();
        roleRepo.save(address);
        userRepo.save(user);
        return mapToDTO(user);
    }

    private UserDTO mapToDTO(User user) {
        return userDTOMapper.mapToDTO(user);
    }

    private User mapToEntity(UserDTO userDTO) {
        return userDTOMapper.mapToEntity(userDTO);
    }
}
