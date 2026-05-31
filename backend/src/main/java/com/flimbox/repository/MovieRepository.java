package com.flimbox.repository;

import com.flimbox.entity.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data JPA repository for {@link Movie} entities.
 *
 * <p>Custom JPQL queries use {@code LOWER()} to make searches case-insensitive
 * without requiring a full-text-search extension at the database layer.</p>
 */
@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    /**
     * Find a single movie by its URL-safe slug.
     *
     * @param slug unique movie slug
     * @return Optional wrapping the matched movie, or empty if not found
     */
    Optional<Movie> findBySlug(String slug);

    /**
     * Paginated listing, optionally filtered by category.
     * When {@code category} is {@code null} all movies are returned.
     *
     * @param category category name (nullable)
     * @param pageable pagination + sort parameters
     * @return page of movies
     */
    @Query("SELECT m FROM Movie m WHERE (:category IS NULL OR LOWER(m.category) = LOWER(:category))")
    Page<Movie> findByCategory(@Param("category") String category, Pageable pageable);

    /**
     * Full-text-style search across title, genre, and language.
     * Results are limited to 30 to avoid unbounded queries.
     *
     * @param keyword lowercased search keyword
     * @return matching movies
     */
    @Query("""
            SELECT m FROM Movie m
            WHERE LOWER(m.title)    LIKE %:keyword%
               OR LOWER(m.genre)    LIKE %:keyword%
               OR LOWER(m.language) LIKE %:keyword%
            ORDER BY m.viewCount DESC
            LIMIT 30
            """)
    List<Movie> searchByKeyword(@Param("keyword") String keyword);
}
