/*
  Warnings:

  - You are about to drop the column `tagsId` on the `post` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_tagsId_fkey`;

-- AlterTable
ALTER TABLE `post` DROP COLUMN `tagsId`;

-- AlterTable
ALTER TABLE `tags` ADD COLUMN `postId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Tags` ADD CONSTRAINT `Tags_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
