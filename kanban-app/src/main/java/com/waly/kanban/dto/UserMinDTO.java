package com.waly.kanban.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class UserMinDTO {

    private Long id;
    private String name;
    private String email;
    private String nickname;
    private String imgUrl;
    private boolean connected;
    private String connectionId;

}
