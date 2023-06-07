CREATE TABLE `posts` (
    `postId` VARCHAR(255) NOT NULL,
    `category` VARCHAR(255) NOT NULL,
    `caption` VARCHAR(255) NOT NULL,
    `image_url` VARCHAR(255) NOT NULL,
    `createdAt` DATETIME NOT NULL,
    `vote` INT NOT NULL,
    PRIMARY KEY (`postId`)
)