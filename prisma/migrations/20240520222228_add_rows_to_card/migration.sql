/*
  Warnings:

  - Added the required column `description` to the `Card` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Card" ADD COLUMN     "description" TEXT NOT NULL,
ALTER COLUMN "upvotes" SET DEFAULT 0;
