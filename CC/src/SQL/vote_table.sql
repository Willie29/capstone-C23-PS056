CREATE TABLE `votes` (
    `vote_id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `post_id` VARCHAR(255) NOT NULL,
    PRIMARY KEY (`vote_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`),
    FOREIGN KEY (`post_id`) REFERENCES `posts` (`post_id`)
)