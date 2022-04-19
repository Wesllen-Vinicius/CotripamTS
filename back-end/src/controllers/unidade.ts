
import { Request, Response } from "express";
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
    const ExistUnidade = await prismaClient.unidade.findUnique({ where: nome });
    if (ExistUnidade === nome) {
      res.status(422).json({ message: "Unidade já cadastratado" });
      return;
    }
    const unidade = await prismaClient.unidade.create({
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
      .json({ id, nome, createdAt, meta_tripaCozida, meta_serosa });
  }


  static async getUnidades(req: Request, res: Response) {
    const { id, nome, createdAt, meta_tripaCozida, meta_serosa } = req.body;

    const buscaUnidadePorIDeNome = await prismaClient.unidade.findFirst({where: {id} } || {where: nome})
    if(buscaUnidadePorIDeNome === null){
      res.status(404).json({ message: "Unidade não encontrada!, Verifique o nome e tente novamente!" });
    } if(!buscaUnidadePorIDeNome){
      res.status(404).json({ message: "Campos de busca são de preenchimento Obrigátorio!" });
    }
  }
}

export default unidadeControlers;
