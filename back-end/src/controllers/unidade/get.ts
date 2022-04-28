
import { PrismaClient } from '@prisma/client';
import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";

class unidadeControlersGet {

  static async getUnidadesById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    console.log(id);
    const unidade = await prismaClient.unidade.findUnique( {
      where: {
        id,
      },
    });
    if (!unidade) {
      return res.status(404).json({ error: "Unidade não encontrada" });
    }
    return res.status(200).json(unidade);
  }

  static async getUnidades(req: Request, res: Response) {
    const unidade = await prismaClient.unidade.findMany();
    return res.status(200).json(unidade);
  }

}

export default unidadeControlersGet;
