-- CreateTable
CREATE TABLE "Stations" (
    "id" SERIAL NOT NULL,
    "kioskId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "totalDocks" INTEGER NOT NULL,
    "docksAvailable" INTEGER NOT NULL,
    "bikesAvailable" INTEGER NOT NULL,
    "classicBikesAvailable" INTEGER NOT NULL,
    "smartBikesAvailable" INTEGER NOT NULL,
    "electricBikesAvailable" INTEGER NOT NULL,
    "rewardBikesAvailable" INTEGER NOT NULL,
    "rewardDocksAvailable" INTEGER NOT NULL,
    "bikes" JSONB NOT NULL,
    "kioskStatus" TEXT NOT NULL,
    "kioskPublicStatus" TEXT NOT NULL,
    "kioskConnectionStatus" TEXT NOT NULL,
    "kioskType" INTEGER NOT NULL,
    "addressStreet" TEXT NOT NULL,
    "addressCity" TEXT NOT NULL,
    "addressState" TEXT NOT NULL,
    "addressZipCode" TEXT NOT NULL,
    "openTime" TEXT,
    "closeTime" TEXT,
    "eventStart" TEXT,
    "eventEnd" TEXT,
    "isEventBased" BOOLEAN NOT NULL DEFAULT false,
    "isVirtual" BOOLEAN NOT NULL DEFAULT false,
    "notes" TEXT,
    "publicText" TEXT NOT NULL DEFAULT '',
    "timeZone" TEXT,
    "trikesAvailable" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "Stations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Weather" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "weather" JSONB NOT NULL,
    "base" TEXT NOT NULL,
    "main" JSONB NOT NULL,
    "visibility" INTEGER NOT NULL,
    "wind" JSONB NOT NULL,
    "clouds" JSONB NOT NULL,
    "dt" INTEGER NOT NULL,
    "sys" JSONB NOT NULL,
    "timezone" DOUBLE PRECISION NOT NULL,
    "cod" INTEGER NOT NULL,
    "createdAt" TEXT NOT NULL,

    CONSTRAINT "Weather_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Stations_kioskId_createdAt_idx" ON "Stations"("kioskId", "createdAt" DESC);

-- CreateIndex
CREATE INDEX "Stations_createdAt_idx" ON "Stations"("createdAt" DESC);

-- CreateIndex
CREATE INDEX "Weather_createdAt_idx" ON "Weather"("createdAt" DESC);
