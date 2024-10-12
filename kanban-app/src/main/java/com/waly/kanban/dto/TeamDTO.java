package com.waly.kanban.dto;

import com.waly.kanban.entities.Team;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class TeamDTO {

    private Long id;
    private String name;
    private String occupationArea;
    private String description;
    private Integer totalCollaborators;
    private Integer totalBoards;
    private List<UserMinDTO> collaborators = new ArrayList<>();
    private List<BoardMinDTO> boards = new ArrayList<>();
    private String imgUrl;
    private String githubLink;

    public TeamDTO(Team team) {
        this.id = team.getId();
        this.name = team.getName();
        this.occupationArea = team.getOccupationArea();
        this.description = team.getDescription();
        this.collaborators = null;
        this.boards = team.getBoards().stream().map(x -> new BoardMinDTO(x)).toList();
        this.totalCollaborators = team.getTotalCollaborators();
        this.totalBoards = team.getTotalBoards();
        this.imgUrl = team.getImgUrl();
        this.githubLink = team.getGithubLink();
    }

}
