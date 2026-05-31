package com.flimbox.dto;

import com.flimbox.entity.MovieQuality;
import lombok.Builder;
import lombok.Value;

/**
 * Lightweight projection of a {@link MovieQuality} row.
 * Exposed as a nested list inside {@link MovieDetailDto}.
 */
@Value
@Builder
public class MovieQualityDto {

    String quality;   // 360p, 480p, 720p, 1080p, 2K, 4K
    String codec;     // x264, HEVC, AV1
    String fileSize;  // e.g. "1.2 GB"
    String speed;     // estimated download speed label

    public static MovieQualityDto from(MovieQuality q) {
        return MovieQualityDto.builder()
                .quality(q.getQuality())
                .codec(q.getCodec())
                .fileSize(q.getFileSize())
                .speed(q.getSpeed())
                .build();
    }
}
