-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nivelAcesso" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "unidades" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(120) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "meta_tripaCozida" DOUBLE PRECISION NOT NULL,
    "meta_serosa" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "unidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "abates" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3),
    "abate" DECIMAL(65,30) NOT NULL,
    "bois" DECIMAL(65,30) NOT NULL,
    "vacas" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "condenados" DECIMAL(65,30) NOT NULL,
    "unidadeId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "abates_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "serosa" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3),
    "corte_630" DECIMAL(65,30) NOT NULL,
    "corte_470" DECIMAL(65,30) NOT NULL,
    "corte_320" DECIMAL(65,30) NOT NULL,
    "corte_170" DECIMAL(65,30) NOT NULL,
    "km_total" DECIMAL(65,30) NOT NULL,
    "media" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,
    "unidadeId" INTEGER,

    CONSTRAINT "serosa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tripaCozida" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3),
    "mocoto" DECIMAL(65,30) NOT NULL,
    "culatra" DECIMAL(65,30) NOT NULL,
    "abomaso" DECIMAL(65,30) NOT NULL,
    "fundo" DECIMAL(65,30) NOT NULL,
    "tripa_grossa" DECIMAL(65,30) NOT NULL,
    "tripa_fina" DECIMAL(65,30) NOT NULL,
    "total" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,
    "unidadeId" INTEGER,

    CONSTRAINT "tripaCozida_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tripaExportacao" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3),
    "tripa_reta" DECIMAL(65,30) NOT NULL,
    "tripa_torta1c" DECIMAL(65,30) NOT NULL,
    "tripa_torta2c" DECIMAL(65,30) NOT NULL,
    "culatra" DECIMAL(65,30) NOT NULL,
    "fundo" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,
    "unidadeId" INTEGER,

    CONSTRAINT "tripaExportacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prodQuimicos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "modifiAt" TIMESTAMP(3),
    "sal_fino" DECIMAL(65,30) NOT NULL,
    "sal_grosso" DECIMAL(65,30) NOT NULL,
    "metabissulfito" DECIMAL(65,30) NOT NULL,
    "peroxido" DECIMAL(65,30) NOT NULL,
    "bombonas" DECIMAL(65,30) NOT NULL,
    "userId" INTEGER,
    "unidadeId" INTEGER,

    CONSTRAINT "prodQuimicos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saidaData" TIMESTAMP(3),
    "quant" DECIMAL(65,30) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "descricao" VARCHAR(255) NOT NULL,
    "estoqueId" INTEGER,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estoque" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "saidaData" TIMESTAMP(3),
    "quantSaida" DECIMAL(65,30) NOT NULL,
    "quant" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "estoque_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_id_fkey" FOREIGN KEY ("id") REFERENCES "unidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "abates" ADD CONSTRAINT "abates_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "abates" ADD CONSTRAINT "abates_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serosa" ADD CONSTRAINT "serosa_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "serosa" ADD CONSTRAINT "serosa_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tripaCozida" ADD CONSTRAINT "tripaCozida_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tripaCozida" ADD CONSTRAINT "tripaCozida_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tripaExportacao" ADD CONSTRAINT "tripaExportacao_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tripaExportacao" ADD CONSTRAINT "tripaExportacao_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prodQuimicos" ADD CONSTRAINT "prodQuimicos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "prodQuimicos" ADD CONSTRAINT "prodQuimicos_unidadeId_fkey" FOREIGN KEY ("unidadeId") REFERENCES "unidades"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_estoqueId_fkey" FOREIGN KEY ("estoqueId") REFERENCES "estoque"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "estoque" ADD CONSTRAINT "estoque_id_fkey" FOREIGN KEY ("id") REFERENCES "unidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
