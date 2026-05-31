package com.flimbox.dto;

import com.flimbox.entity.Movie;
import lombok.Builder;
import lombok.Value;

/**
 * Compact movie projection used in paginated list endpoints.
 * Does NOT include the qualities list or full description to keep payload small.
 */
@Value
@Builder
public class MovieSummaryDto {

    Long   id;
    String slug;
    String title;
    String posterUrl;
    Integer year;
    String  quality;    // e.g. "720p / 1080p"
    String  language;
    String  genre;
    String  category;
    String  badge;
    String  badgeColor;
    Double  rating;
    Long    viewCount;

    /** Map a {@link Movie} entity to this DTO. */
    public static MovieSummaryDto from(Movie m) {
        return MovieSummaryDto.builder()
                .id(m.getId())
                .slug(m.getSlug())
                .title(m.getTitle())
                .posterUrl(m.getPosterUrl())
                .year(m.getYear())
                .quality(m.getQuality())
                .language(m.getLanguage())
                .genre(m.getGenre())
                .category(m.getCategory())
                .badge(m.getBadge())
                .badgeColor(m.getBadgeColor())
                .rating(m.getRating())
                .viewCount(m.getViewCount())
                .build();
    }
}
