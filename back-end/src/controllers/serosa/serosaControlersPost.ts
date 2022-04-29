import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";



class serosaControlersPost {
  static allSerosa(_req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  static async postSerosa(_req: Request, res: Response) {
    const { id, createdAt, modifiAt, corte_630,  corte_470, corte_320, corte_170, km_total, media} = _req.body;

    if (!corte_630) {
      res
        .status(422)
        .json({ message: "Valor do 630 é obrigatorio para cadastro de Serosa!" });
      return;
    }
    if (!corte_470) {
      res
        .status(422)
        .json({
          message:
            "Valor do 470 é obrigatorio para cadastro de Serosa!",
        });
      return;
    }
    if (!corte_320) {
      res
        .status(422)
        .json({
          message: "Valor do 320 é obrigatorio para cadastro de Serosa!",
        });
      return;
    }
    if (!corte_170) {
      res
        .status(422)
        .json({
          message: "Valor do 170 é obrigatorio para cadastro de Serosa!",
        });
      return;
    }
    const ExistSerosaCadastrada = await prismaClient.serosa.findUnique({
      where: { id },
    });
    if (ExistSerosaCadastrada) {
      res.status(422).json({ message: "Serosa já cadastratado" });
      return;
    }
    await prismaClient.serosa.create({
      data: {
        id,
        createdAt,
        modifiAt,
        corte_630,
        corte_470,
        corte_320,
        corte_170,
        km_total,
        media
      },
    });
    res
      .status(201)
      .json({
        message: "Serosa cadastrada com sucesso",
        data: {
          id,
          createdAt,
          modifiAt,
          corte_630,
          corte_470,
          corte_320,
          corte_170,
          km_total,
          media
        },
      });
  }
}

export default serosaControlersPost;
