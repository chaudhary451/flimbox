package com.flimbox.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

/**
 * Thrown by {@link com.flimbox.service.MovieServiceImpl} when a movie
 * cannot be located by slug.  The {@link ResponseStatus} annotation causes
 * Spring MVC to return a {@code 404 Not Found} response automatically,
 * without needing an explicit {@code @ExceptionHandler}.
 */
@ResponseStatus(HttpStatus.NOT_FOUND)
public class MovieNotFoundException extends RuntimeException {

    public MovieNotFoundException(String message) {
        super(message);
    }

    public MovieNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
