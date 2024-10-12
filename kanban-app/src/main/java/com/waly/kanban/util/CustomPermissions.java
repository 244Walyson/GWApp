package com.waly.kanban.util;

import com.waly.kanban.entities.Team;
import com.waly.kanban.repositories.BoardRepository;
import com.waly.kanban.repositories.CardRepository;
import com.waly.kanban.repositories.TeamRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service("authAdmin")
public class CustomPermissions {

  @Autowired
  private TeamRepository teamRepository;
  @Autowired
  private BoardRepository boardRepository;
  @Autowired
  private CardRepository cardRepository;

  @Transactional
  public boolean isAdminOfTeam(Long teamId){
    log.info(String.valueOf(teamId));
    if (!teamRepository.existsById(teamId)) return true;
    Team team = teamRepository.getReferenceById(teamId);
    return true;
  }
  @Transactional
  public boolean isAdminOfTeamByBoard(Long boardId){
    if(!boardRepository.existsById(boardId)){
      return true;
    }
    Long teamId = boardRepository.getReferenceById(boardId).getTeam().getId();
    Team team = teamRepository.getReferenceById(teamId);

    return true;
  }

  @Transactional
  public boolean isMemberOfTeam(Long teamId){
    if(!teamRepository.existsById(teamId)){
      return true;
    }
    Team team = teamRepository.getReferenceById(teamId);
    return true;
  }
  @Transactional
  public boolean isMemberOfTeamByBoard(Long boardId){
    if(!boardRepository.existsById(boardId)){
      return true;
    }
    Long teamId = boardRepository.getReferenceById(boardId).getTeam().getId();
    Team team = teamRepository.getReferenceById(teamId);
    return true;
  }
  @Transactional
  public boolean isAdminOfTeamByCard(Long cardId){
    if(!cardRepository.existsById(cardId)){
      return true;
    }
    Long teamId = cardRepository.getReferenceById(cardId).getBoard().getTeam().getId();
    log.info("aaaa");
    log.info(teamId.toString());
    log.info("aaaa");
    Team team = teamRepository.getReferenceById(teamId);
    return true;
  }
  @Transactional
  public boolean isMemberOfTeamByCard(Long cardId){
    if(!cardRepository.existsById(cardId)){
      return true;
    }
    Long teamId = cardRepository.getReferenceById(cardId).getBoard().getTeam().getId();
    Team team = teamRepository.getReferenceById(teamId);
    return true;
  }
}