/*
  Warnings:

  - You are about to drop the column `postId` on the `tags` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `tags` DROP FOREIGN KEY `Tags_postId_fkey`;

-- AlterTable
ALTER TABLE `tags` DROP COLUMN `postId`;

-- CreateTable
CREATE TABLE `_PostToTags` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PostToTags_AB_unique`(`A`, `B`),
    INDEX `_PostToTags_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_PostToTags` ADD FOREIGN KEY (`A`) REFERENCES `Post`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PostToTags` ADD FOREIGN KEY (`B`) REFERENCES `Tags`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
