package com.flimbox.dto;

import com.flimbox.entity.Movie;
import lombok.Builder;
import lombok.Value;

import java.time.Instant;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Full movie detail payload returned by {@code GET /api/movies/{slug}}.
 * Includes description, all available quality options, and counters.
 */
@Value
@Builder
public class MovieDetailDto {

    Long   id;
    String slug;
    String title;
    String posterUrl;
    String description;
    Integer year;
    String  type;          // WEB-DL, HQ-HDTC, etc.
    String  quality;       // primary quality string
    String  language;
    String  genre;
    String  category;
    String  source;
    String  badge;
    String  badgeColor;
    Double  rating;
    Long    viewCount;
    Long    downloadCount;
    Instant createdAt;
    Instant updatedAt;

    /** Nested list of all available quality options with download paths. */
    List<MovieQualityDto> qualities;

    /** Map a fully-loaded {@link Movie} entity (with qualities) to this DTO. */
    public static MovieDetailDto from(Movie m) {
        List<MovieQualityDto> qualityDtos = (m.getQualities() == null)
                ? Collections.emptyList()
                : m.getQualities().stream()
                        .map(MovieQualityDto::from)
                        .collect(Collectors.toList());

        return MovieDetailDto.builder()
                .id(m.getId())
                .slug(m.getSlug())
                .title(m.getTitle())
                .posterUrl(m.getPosterUrl())
                .description(m.getDescription())
                .year(m.getYear())
                .type(m.getType())
                .quality(m.getQuality())
                .language(m.getLanguage())
                .genre(m.getGenre())
                .category(m.getCategory())
                .source(m.getSource())
                .badge(m.getBadge())
                .badgeColor(m.getBadgeColor())
                .rating(m.getRating())
                .viewCount(m.getViewCount())
                .downloadCount(m.getDownloadCount())
                .createdAt(m.getCreatedAt())
                .updatedAt(m.getUpdatedAt())
                .qualities(qualityDtos)
                .build();
    }
}
