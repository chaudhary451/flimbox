package com.flimbox.controller;

import com.flimbox.dto.*;
import com.flimbox.service.MovieService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST API for movies.
 * GET /api/movies            - list with pagination & filtering
 * GET /api/movies/{slug}     - single movie detail
 * GET /api/movies/search     - search by title/genre/lang
 * GET /api/movies/categories - all category names
 */
@RestController
@RequestMapping("/api/movies")
@RequiredArgsConstructor
public class MovieController {

    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<Page<MovieSummaryDto>> getMovies(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(required = false) String category,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String direction) {

        Sort sort = direction.equalsIgnoreCase("asc")
            ? Sort.by(sortBy).ascending()
            : Sort.by(sortBy).descending();

        PageRequest pageable = PageRequest.of(page, Math.min(size, 50), sort);
        return ResponseEntity.ok(movieService.getMovies(category, pageable));
    }

    @GetMapping("/{slug}")
    public ResponseEntity<MovieDetailDto> getMovie(@PathVariable String slug) {
        return ResponseEntity.ok(movieService.getMovieBySlug(slug));
    }

    @GetMapping("/search")
    public ResponseEntity<List<MovieSummaryDto>> search(@RequestParam String q) {
        return ResponseEntity.ok(movieService.search(q));
    }

    @GetMapping("/categories")
    public ResponseEntity<List<String>> getCategories() {
        return ResponseEntity.ok(
            List.of("bollywood","hollywood","south","webseries","dubbed","adult")
        );
    }
}
