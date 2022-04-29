import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class AbateControlersPost {
  static allAbates(_req: Request, res: Response) {
    res.status(200).json({ message: "!" })
  }
  static async postAbates(_req: Request, res: Response) {
    const { id, createdAt, modifiAt, abate, bois, vacas, total, condenados } =
      _req.body

    if (!abate) {
      res.status(422).json({
        message: "Valor do Abate é obrigatorio para cadastro de Abate!",
      })
      return
    }
    if (!bois) {
      res.status(422).json({
        message: "Quantidade de Bois é obrigatorio para cadastro de Abate!",
      })
      return
    }
    if (!condenados) {
      res.status(422).json({
        message: "Quant. de Condenados é obrigatorio para cadastro de Abate!",
      })
      return
    }
    const ExistAbate = await prismaClient.abate.findUnique({
      where: { id },
    })
    if (ExistAbate) {
      res.status(422).json({ message: "Abate já cadastratado" })
      return
    }
    await prismaClient.abate.create({
      data: {
        id,
        createdAt,
        modifiAt,
        abate,
        bois,
        vacas,
        total,
        condenados,
      },
    })
    res.status(201).json({
      message: "unidade criada com sucesso",
      data: {
        id,
        createdAt,
        modifiAt,
        abate,
        bois,
        vacas,
        total,
        condenados,
      },
    })
  }
}

export default AbateControlersPost
