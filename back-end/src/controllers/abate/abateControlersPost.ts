import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class AbateControlersPost {
  static async postAbates(_req: Request, res: Response) {
    try {
      const { id, createdAt, abate, bois, vacas, total, condenados, userId } =
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
      await prismaClient.abate.create({
        data: {
          id,
          createdAt,
          abate: parseFloat(abate),
          bois: parseFloat(bois),
          vacas: parseFloat(vacas),
          total: parseFloat(total),
          condenados: parseFloat(condenados),
          userId: parseInt(userId),
        },
      })
      res.status(201).json({
        message: "abate criado com sucesso",
      })
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "Server error!",
      })
    }
  }
}

export default AbateControlersPost
