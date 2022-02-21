/*
  Warnings:

  - You are about to drop the `_posttotags` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_posttotags` DROP FOREIGN KEY `_posttotags_ibfk_1`;

-- DropForeignKey
ALTER TABLE `_posttotags` DROP FOREIGN KEY `_posttotags_ibfk_2`;

-- DropTable
DROP TABLE `_posttotags`;

-- DropTable
DROP TABLE `post`;

-- CreateTable
CREATE TABLE `Posts` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `text` TEXT NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `github` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PostsToTags` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PostsToTags_AB_unique`(`A`, `B`),
    INDEX `_PostsToTags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PostsToTags` ADD FOREIGN KEY (`A`) REFERENCES `Posts`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostsToTags` ADD FOREIGN KEY (`B`) REFERENCES `Tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
