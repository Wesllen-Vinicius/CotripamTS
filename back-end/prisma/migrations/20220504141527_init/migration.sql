-- DropForeignKey
ALTER TABLE "abates" DROP CONSTRAINT "abates_id_fkey";

-- AlterTable
ALTER TABLE "abates" ADD COLUMN     "userId" INTEGER;

-- AddForeignKey
ALTER TABLE "abates" ADD CONSTRAINT "abates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
