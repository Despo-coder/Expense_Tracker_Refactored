-- CreateTable
CREATE TABLE "UserV1" (
    "id" TEXT NOT NULL,
    "clerkId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserV1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Transactionv1" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "paymentType" TEXT NOT NULL,
    "transactionType" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Transactionv1_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserV1_clerkId_key" ON "UserV1"("clerkId");

-- CreateIndex
CREATE UNIQUE INDEX "UserV1_email_key" ON "UserV1"("email");

-- CreateIndex
CREATE INDEX "Transactionv1_userId_idx" ON "Transactionv1"("userId");

-- AddForeignKey
ALTER TABLE "Transactionv1" ADD CONSTRAINT "Transactionv1_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserV1"("clerkId") ON DELETE CASCADE ON UPDATE CASCADE;
