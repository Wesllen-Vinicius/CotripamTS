import { prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { json } from "body-parser";
import { Request, response, Response } from "express";
import { prismaClient } from "../data/prismaClient";

class unidadeControlers {
  static allUnidades(req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  //CADASTRO E CRIAÇÃO DE TOKEN
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

  static async deleteUnidades(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleteUnidade = await prismaClient.unidade.findUnique( {
      where: {
        id,
      },
    })
    if(!deleteUnidade){
      res.status(404).json({ messae: "Unidade não encontrada."})
      return
    } 
    await prismaClient.unidade.delete( {
      where: {
        id,
      },
    })
    return res.status(200).json({message:"Deletado"})
  }
}

export default unidadeControlers;
