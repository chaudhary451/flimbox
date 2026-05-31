package com.flimbox.repository;

import com.flimbox.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data JPA repository for {@link User} entities.
 * Used primarily by {@link com.flimbox.service.UserDetailsServiceImpl}
 * to load users during JWT authentication.
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    /**
     * Look up a user by their unique e-mail address.
     * Spring Security calls this indirectly via {@code UserDetailsService}.
     *
     * @param email the user's e-mail
     * @return Optional wrapping the matched User
     */
    Optional<User> findByEmail(String email);

    /** Check whether a given e-mail is already registered. */
    boolean existsByEmail(String email);
}
