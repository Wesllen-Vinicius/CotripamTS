import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";

class TripaCozidaControlersPost {
  static async postTripaCozida(_req: Request, res: Response) {
    const {
      id,
      createdAt,
      modifiAt,
      mocoto,
      culatra,
      abomaso,
      fundo,
      tripa_grossa,
      tripa_fina,
      total,
    } = _req.body;

    if (!mocoto) {
      res.status(422).json({
        message: "Valor do 630 é obrigatorio para cadastro de Serosa!",
      });
      return;
    }
    if (!culatra) {
      res.status(422).json({
        message: "Valor do 470 é obrigatorio para cadastro de Serosa!",
      });
      return;
    }
    if (!abomaso) {
      res.status(422).json({
        message: "Valor do 320 é obrigatorio para cadastro de Serosa!",
      });
      return;
    }
    if (!fundo) {
      res.status(422).json({
        message: "Valor do 170 é obrigatorio para cadastro de Serosa!",
      });
      return;
    }
    if (!tripa_fina) {
      res.status(422).json({
        message: "Valor do 170 é obrigatorio para cadastro de Serosa!",
      });
      return;
    }
    if (!tripa_grossa) {
      res.status(422).json({
        message: "Valor do 170 é obrigatorio para cadastro de Serosa!",
      });
      return;
    }
    const ExistTripaCozida = await prismaClient.tripaCozida.findUnique({
      where: { id },
    });
    if (ExistTripaCozida) {
      res.status(422).json({ message: "Tripa Cozida já cadastratado" });
      return;
    }
    await prismaClient.tripaCozida.create({
      data: {
        id,
        createdAt,
        modifiAt,
        mocoto,
        culatra,
        abomaso,
        fundo,
        tripa_grossa,
        tripa_fina,
        total,
      },
    });
    res.status(201).json({
      message: "Tripa Cozida cadastrada com sucesso",
      data: {
        id,
        createdAt,
        modifiAt,
        mocoto,
        culatra,
        abomaso,
        fundo,
        tripa_grossa,
        tripa_fina,
        total,
      },
    });
  }
}

export default TripaCozidaControlersPost;
