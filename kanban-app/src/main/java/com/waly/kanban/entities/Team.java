package com.waly.kanban.entities;

import jakarta.persistence.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "tb_team")
public class Team {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String occupationArea;
    @Column(columnDefinition = "TEXT")
    private String description;
    @ElementCollection
    private Set<Long> collaboratorsIds = new HashSet<>();
    @OneToMany(mappedBy = "team")
    private Set<Board> boards = new HashSet<>();
    private Integer totalCollaborators;
    private Integer totalBoards;
    private String imgUrl;
    private String githubLink;

    public Team() {
        this.totalBoards = 0;
        this.totalCollaborators = 1;
    }

    public Team(Long id, String name, String occupationArea, String description, String imgUrl, String githubLink) {
        this.id = id;
        this.name = name;
        this.occupationArea = occupationArea;
        this.description = description;
        this.imgUrl = imgUrl;
        this.githubLink = githubLink;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImgUrl() {
        return imgUrl;
    }

    public void setImgUrl(String imgUrl) {
        this.imgUrl = imgUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOccupationArea() {
        return occupationArea;
    }

    public void setOccupationArea(String occupationArea) {
        this.occupationArea = occupationArea;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCollaboratorsIds(Set<Long> collaboratorsIds) {
        this.collaboratorsIds = collaboratorsIds;
    }

    public Set<Board> getBoards() {
        return boards;
    }

    public void addBoard(Board board) {
        this.boards.add(board);
    }

    public Integer getTotalCollaborators() {
        return totalCollaborators;
    }

    public void setTotalCollaborators(Integer totalCollaborators) {
        this.totalCollaborators = totalCollaborators;
    }

    public Integer getTotalBoards() {
        return totalBoards;
    }

    public void setTotalBoards(Integer totalBoards) {
        this.totalBoards = totalBoards;
    }

    public void addUserTeam(Long userId){
        this.collaboratorsIds.add(userId);
    }

    public String getGithubLink() {
        return githubLink;
    }

    public void setGithubLink(String githubLink) {
        this.githubLink = githubLink;
    }
}
