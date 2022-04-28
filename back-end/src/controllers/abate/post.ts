import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";



class abateControlersPost {
  static allAbates(req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  static async postAbates(req: Request, res: Response) {
    const { id, createdAt, modifiAt, abate,  bois, vacas, total, condenados } = req.body;

    if (!abate) {
      res
        .status(422)
        .json({ message: "Valor do Abate é obrigatorio para cadastro de Abate!" });
      return;
    }
    if (!bois) {
      res
        .status(422)
        .json({
          message:
            "Quantidade de Bois é obrigatorio para cadastro de Abate!",
        });
      return;
    }
    if (!condenados) {
      res
        .status(422)
        .json({
          message: "Quant. de Condenados é obrigatorio para cadastro de Abate!",
        });
      return;
    }
    const ExistAbate = await prismaClient.abate.findUnique({
      where: { id },
    });
    if (ExistAbate) {
      res.status(422).json({ message: "Abate já cadastratado" });
      return;
    }
    const Abate = await prismaClient.abate.create({
      data: {
        id,
        createdAt,
        modifiAt,
        abate,
        bois,
        vacas,
        total,
        condenados
      },
    });
    res
      .status(201)
      .json({
        message: "unidade criada com sucesso",
        data: {
          id,
          createdAt,
          modifiAt,
          abate,
          bois,
          vacas,
          total,
          condenados
        },
      });
  }
}

export default abateControlersPost;
