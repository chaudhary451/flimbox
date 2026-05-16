package com.flimbox.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.Instant;

@Entity
@Table(name = "watch_history",
    uniqueConstraints = @UniqueConstraint(columnNames = {"user_id","movie_id"}))
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class WatchHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "movie_id", nullable = false)
    private Movie movie;

    @Column(name = "watched_seconds", columnDefinition = "INT DEFAULT 0")
    private Integer watchedSeconds = 0;

    @Column(name = "total_seconds")
    private Integer totalSeconds;

    @CreationTimestamp
    @Column(name = "last_watched_at")
    private Instant lastWatchedAt;
}
