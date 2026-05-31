package com.flimbox.service;

import com.flimbox.dto.MovieDetailDto;
import com.flimbox.dto.MovieSummaryDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

/**
 * Business-logic contract for movie operations.
 *
 * <p>Decoupled from the controller so the implementation can be swapped
 * (e.g. with a cached or search-engine-backed version) without touching
 * {@link com.flimbox.controller.MovieController}.</p>
 */
public interface MovieService {

    /**
     * Return a paginated list of movies, optionally filtered by category.
     *
     * @param category category slug (nullable – returns all when null)
     * @param pageable pagination + sort options
     * @return page of {@link MovieSummaryDto}
     */
    Page<MovieSummaryDto> getMovies(String category, Pageable pageable);

    /**
     * Fetch the full detail of one movie by its URL slug.
     *
     * @param slug unique movie slug
     * @return full {@link MovieDetailDto}
     * @throws com.flimbox.exception.MovieNotFoundException when not found
     */
    MovieDetailDto getMovieBySlug(String slug);

    /**
     * Free-text search across title, genre, and language.
     *
     * @param query raw search term from the user
     * @return up to 30 matching {@link MovieSummaryDto} records
     */
    List<MovieSummaryDto> search(String query);
}
