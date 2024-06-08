package com.kanban.chat.models.embedded;

import com.kanban.chat.models.entities.ChatMessageEntity;
import org.springframework.data.annotation.Id;

import java.time.Instant;
import java.util.Date;

public class ChatMessageEmbedded {

    private String id;
    private UserEmbedded sender;
    private String content;
    private Date sendAt;

    public ChatMessageEmbedded() {
    }

    public ChatMessageEmbedded(String id, UserEmbedded sender, String content, Date sendAt) {
        this.id = id;
        this.sender = sender;
        this.content = content;
        this.sendAt = sendAt;
    }

    public ChatMessageEmbedded(ChatMessageEntity entity){
        this.id = entity.getId();
        this.sender = entity.getSender();
        this.content = entity.getContent();
        this.sendAt = entity.getInstant();
    }
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public UserEmbedded getSender() {
        return sender;
    }

    public void setSender(UserEmbedded sender) {
        this.sender = sender;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Date getSendAt() {
        return sendAt;
    }

    public void setSendAt(Date sendAt) {
        this.sendAt = sendAt;
    }
}
