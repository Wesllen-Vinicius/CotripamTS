import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class TripaExportacaoControlersPost {
  static async postTripaExportacao(_req: Request, res: Response) {
    const {
      id,
      createdAt,
      modifiAt,
      tripa_reta,
      tripa_torta1c,
      tripa_torta2c,
      culatra,
      fundo,
    } = _req.body

    if (!tripa_reta) {
      res.status(422).json({
        message: "Tripa Reta é obrigatorio para cadastro de Serosa!",
      })
      return
    }
    if (!culatra) {
      res.status(422).json({
        message: "Culatra é obrigatorio para cadastro de Serosa!",
      })
      return
    }
    if (!tripa_torta1c) {
      res.status(422).json({
        message: "Tripa torta 1c é obrigatorio para cadastro de Serosa!",
      })
      return
    }
    if (!fundo) {
      res.status(422).json({
        message: "Fundo é obrigatorio para cadastro de Serosa!",
      })
      return
    }
    if (!tripa_torta2c) {
      res.status(422).json({
        message: "Tripa torta 2c é obrigatorio para cadastro de Serosa!",
      })
      return
    }
    const ExistTripaExportacao = await prismaClient.tripaExportacao.findUnique({
      where: { id },
    })
    if (ExistTripaExportacao) {
      res.status(422).json({ message: "Tripa Cozida já cadastratado" })
      return
    }
    await prismaClient.tripaExportacao.create({
      data: {
        id,
        createdAt,
        modifiAt,
        tripa_reta,
        tripa_torta1c,
        tripa_torta2c,
        culatra,
        fundo,
      },
    })
    res.status(201).json({
      message: "Tripa Exportacao cadastrada com sucesso",
      data: {
        id,
        createdAt,
        modifiAt,
        tripa_reta,
        tripa_torta1c,
        tripa_torta2c,
        culatra,
        fundo,
      },
    })
  }
}

export default TripaExportacaoControlersPost
