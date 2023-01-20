/*
  Warnings:

  - You are about to drop the column `cancelAt` on the `notifications` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `notifications` RENAME COLUMN `cancelAt` TO `canceledAt`;
