-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nivelAcesso" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Unidade" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meta_tripaCozida" DOUBLE PRECISION NOT NULL,
    "meta_serosa" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Unidade_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Abate" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3) NOT NULL,
    "abate" DECIMAL(65,30) NOT NULL,
    "bois" DECIMAL(65,30) NOT NULL,
    "vacas" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "condenados" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Abate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Serosa" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3) NOT NULL,
    "corte_630" DECIMAL(65,30) NOT NULL,
    "corte_470" DECIMAL(65,30) NOT NULL,
    "corte_320" DECIMAL(65,30) NOT NULL,
    "corte_170" DECIMAL(65,30) NOT NULL,
    "km_total" DECIMAL(65,30) NOT NULL,
    "media" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Serosa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripaCozida" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3) NOT NULL,
    "mocoto" DECIMAL(65,30) NOT NULL,
    "culatra" DECIMAL(65,30) NOT NULL,
    "abomaso" DECIMAL(65,30) NOT NULL,
    "fundo" DECIMAL(65,30) NOT NULL,
    "tripa_grossa" DECIMAL(65,30) NOT NULL,
    "tripa_fina" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "TripaCozida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TripaExportacao" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3) NOT NULL,
    "tripa_reta" DECIMAL(65,30) NOT NULL,
    "tripa_torta1c" DECIMAL(65,30) NOT NULL,
    "tripa_torta2c" DECIMAL(65,30) NOT NULL,
    "culatra" DECIMAL(65,30) NOT NULL,
    "fundo" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "TripaExportacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3) NOT NULL,
    "sal_fino" DECIMAL(65,30) NOT NULL,
    "sal_grosso" DECIMAL(65,30) NOT NULL,
    "metabissulfito" DECIMAL(65,30) NOT NULL,
    "peroxido" DECIMAL(65,30) NOT NULL,
    "bombonas" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saidaData" TIMESTAMP(3) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "estoqueId" INTEGER,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Estoque" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saidaData" TIMESTAMP(3) NOT NULL,
    "quantSaida" DECIMAL(65,30) NOT NULL,
    "quant" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "Estoque_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_id_fkey" FOREIGN KEY ("id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abate" ADD CONSTRAINT "Abate_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Abate" ADD CONSTRAINT "Abate_id_fkey" FOREIGN KEY ("id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serosa" ADD CONSTRAINT "Serosa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Serosa" ADD CONSTRAINT "Serosa_id_fkey" FOREIGN KEY ("id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripaCozida" ADD CONSTRAINT "TripaCozida_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripaCozida" ADD CONSTRAINT "TripaCozida_id_fkey" FOREIGN KEY ("id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripaExportacao" ADD CONSTRAINT "TripaExportacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TripaExportacao" ADD CONSTRAINT "TripaExportacao_id_fkey" FOREIGN KEY ("id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_id_fkey" FOREIGN KEY ("id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_estoqueId_fkey" FOREIGN KEY ("estoqueId") REFERENCES "Estoque"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Estoque" ADD CONSTRAINT "Estoque_id_fkey" FOREIGN KEY ("id") REFERENCES "Unidade"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
