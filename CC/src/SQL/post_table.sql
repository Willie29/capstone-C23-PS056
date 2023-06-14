CREATE TABLE `posts` (
    `post_id` VARCHAR(255) NOT NULL,
    `user_id` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `caption` VARCHAR(255) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `vote` INT NOT NULL,
    PRIMARY KEY (`post_id`),
    FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
);
