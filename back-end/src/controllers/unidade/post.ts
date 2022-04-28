import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";



class unidadeControlersPost {
  static allUnidades(req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  static async postUnidades(req: Request, res: Response) {
    const { id, nome, createdAt, meta_tripaCozida, meta_serosa } = req.body;

    if (!nome) {
      res
        .status(422)
        .json({ message: "Nome é obrigatorio para cadastro de Unidade!" });
      return;
    }
    if (!meta_tripaCozida) {
      res
        .status(422)
        .json({
          message:
            "Meta da Tripa Cozida é obrigatorio para cadastro de Unidade!",
        });
      return;
    }
    if (!meta_serosa) {
      res
        .status(422)
        .json({
          message: "Meta da Serosa é obrigatorio para cadastro de Unidade!",
        });
      return;
    }
    const ExistUnidade = await prismaClient.unidade.findUnique({
      where: { id },
    });
    if (ExistUnidade) {
      res.status(422).json({ message: "Unidade já cadastratado" });
      return;
    }
    const Unidade = await prismaClient.unidade.create({
      data: {
        id,
        nome,
        createdAt,
        meta_tripaCozida,
        meta_serosa,
      },
    });
    res
      .status(201)
      .json({
        message: "unidade criada com sucesso",
        id,
        nome,
        createdAt,
        meta_tripaCozida,
        meta_serosa,
      });
  }
}

export default unidadeControlersPost;
