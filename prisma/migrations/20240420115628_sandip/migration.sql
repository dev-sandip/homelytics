/*
  Warnings:

  - You are about to drop the column `password` on the `Users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Users" DROP COLUMN "password";

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "roomNo" INTEGER NOT NULL,
    "roomRent" INTEGER NOT NULL,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Data_roomNo_key" ON "Data"("roomNo");

-- AddForeignKey
ALTER TABLE "Data" ADD CONSTRAINT "Data_id_fkey" FOREIGN KEY ("id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
