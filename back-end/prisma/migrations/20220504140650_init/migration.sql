/*
  Warnings:

  - You are about to drop the column `userId` on the `abates` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "abates" DROP CONSTRAINT "abates_userId_fkey";

-- AlterTable
ALTER TABLE "abates" DROP COLUMN "userId";

-- AddForeignKey
ALTER TABLE "abates" ADD CONSTRAINT "abates_id_fkey" FOREIGN KEY ("id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
