package com.waly.kanban.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDTO {

    private Long id;
    private String name;
    private String nickname;
    private String email;
    private String imgUrl;
    private String bio;
    private List<CardMinDTO> cards = new ArrayList<>();
    private List<TeamMinDTO> teams = new ArrayList<>();

}
