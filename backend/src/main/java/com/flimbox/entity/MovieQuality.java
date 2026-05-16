package com.flimbox.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "movie_qualities")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class MovieQuality {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "movie_id", nullable = false)
    private Movie movie;

    @Column(nullable = false, length = 20)
    private String quality;   // 360p, 480p, 720p, 1080p, 2K, 4K

    @Column(length = 20)
    private String codec;     // x264, HEVC, AV1

    @Column(length = 20)
    private String fileSize;  // 1.2GB, 4.5GB

    @Column(name = "file_path", length = 500)
    private String filePath;  // internal CDN path

    @Column(length = 30)
    private String speed;     // estimated download speed label
}
