package com.main.assignmenttracker.mapper;

import com.main.assignmenttracker.dtos.RoleDTO;
import com.main.assignmenttracker.entities.Role;
import org.springframework.stereotype.Component;

@Component
public class RoleDTOMapper {

    public RoleDTO mapToDTO(Role role) {
        RoleDTO roleDTO = new RoleDTO();
        roleDTO.setId(role.getId());
        roleDTO.setName(role.getName());
        return roleDTO;
    }

    public Role mapToEntity(RoleDTO roleDTO) {
        Role role = new Role();
        role.setId(roleDTO.getId());
        role.setName(roleDTO.getName());
        return role;
    }

    public void updateEntity(RoleDTO roleDTO, Role existingRole) {
        existingRole.setName(roleDTO.getName());
    }
}
