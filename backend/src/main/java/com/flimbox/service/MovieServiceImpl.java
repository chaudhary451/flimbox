package com.flimbox.service;

import com.flimbox.dto.MovieDetailDto;
import com.flimbox.dto.MovieSummaryDto;
import com.flimbox.entity.Movie;
import com.flimbox.exception.MovieNotFoundException;
import com.flimbox.repository.MovieRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.stream.Collectors;

/**
 * Default JPA-backed implementation of {@link MovieService}.
 *
 * <p>Results are cached via Spring Cache (backed by Redis as configured in
 * {@code application.properties}) to avoid hammering the database on
 * high-traffic listing and detail pages.</p>
 */
@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class MovieServiceImpl implements MovieService {

    private final MovieRepository movieRepository;

    /**
     * {@inheritDoc}
     *
     * <p>When {@code category} is blank or null, all movies are returned.
     * The category value is normalised to lower-case before querying so that
     * URL params like "Bollywood" and "bollywood" resolve to the same set.</p>
     */
    @Override
    @Cacheable(value = "movies", key = "#category + '_' + #pageable.pageNumber + '_' + #pageable.pageSize")
    public Page<MovieSummaryDto> getMovies(String category, Pageable pageable) {
        String cat = StringUtils.hasText(category) ? category.toLowerCase() : null;
        log.debug("getMovies: category={}, page={}", cat, pageable.getPageNumber());
        return movieRepository.findByCategory(cat, pageable)
                .map(MovieSummaryDto::from);
    }

    /**
     * {@inheritDoc}
     *
     * <p>The qualities collection is lazily loaded; this method runs inside a
     * read-only transaction so Hibernate can still initialise the proxy.</p>
     */
    @Override
    @Cacheable(value = "movie_detail", key = "#slug")
    public MovieDetailDto getMovieBySlug(String slug) {
        log.debug("getMovieBySlug: slug={}", slug);
        Movie movie = movieRepository.findBySlug(slug)
                .orElseThrow(() -> new MovieNotFoundException("Movie not found: " + slug));
        return MovieDetailDto.from(movie);
    }

    /**
     * {@inheritDoc}
     *
     * <p>The search term is lower-cased before being forwarded to the
     * repository so the LIKE predicate matches case-insensitively.</p>
     */
    @Override
    @Cacheable(value = "movie_search", key = "#query.toLowerCase()")
    public List<MovieSummaryDto> search(String query) {
        log.debug("search: q={}", query);
        String keyword = query == null ? "" : query.trim().toLowerCase();
        return movieRepository.searchByKeyword(keyword)
                .stream()
                .map(MovieSummaryDto::from)
                .collect(Collectors.toList());
    }
}
