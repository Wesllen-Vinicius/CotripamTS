import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";

class abateControlersDelete{
  static allAbates(req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  static async deleteAbates(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleteabate = await prismaClient.abate.findUnique( {
      where: {
        id,
      },
    })
    if(!deleteabate){
      res.status(404).json({ messae: "abate não encontrada."})
      return
    } 
    await prismaClient.abate.delete( {
      where: {
        id,
      },
    })
    return res.status(200).json({message:"Deletado"})
  }
}

export default abateControlersDelete;
