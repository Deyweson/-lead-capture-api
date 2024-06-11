-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "tell" TEXT NOT NULL,
    "newsletter" BOOLEAN NOT NULL
);
