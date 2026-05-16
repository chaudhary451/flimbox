package com.flimbox.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.util.List;

@Entity
@Table(name = "movies", indexes = {
    @Index(name = "idx_movie_category", columnList = "category"),
    @Index(name = "idx_movie_title", columnList = "title")
})
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String slug;

    @Column(nullable = false, length = 200)
    private String title;

    @Column(name = "poster_url", length = 500)
    private String posterUrl;

    @Column(length = 1000)
    private String description;

    private Integer year;

    @Column(length = 50)
    private String type;       // WEB-DL, HQ-HDTC, etc.

    @Column(length = 100)
    private String quality;

    @Column(length = 100)
    private String language;

    @Column(length = 50)
    private String genre;

    @Column(length = 50)
    private String category;   // bollywood, hollywood, south, webseries, dubbed

    @Column(length = 100)
    private String source;

    @Column(precision = 3)
    private Double rating;

    @Column(length = 20)
    private String badge;

    @Column(name = "badge_color", length = 20)
    private String badgeColor;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<MovieQuality> qualities;

    @Column(name = "view_count", columnDefinition = "BIGINT DEFAULT 0")
    private Long viewCount = 0L;

    @Column(name = "download_count", columnDefinition = "BIGINT DEFAULT 0")
    private Long downloadCount = 0L;

    @CreationTimestamp
    @Column(name = "created_at", updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Column(name = "updated_at")
    private Instant updatedAt;
}
