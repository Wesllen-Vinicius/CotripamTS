import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";

class userControlersDelete {
  static async allUsers(req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  static async deleteUser(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const deleteUser= await prismaClient.user.findUnique( {
      where: {
        id,
      },
    })
    if(!deleteUser){
      res.status(404).json({ messae: "Usuario não encontrada."})
      return
    } 
    await prismaClient.user.delete( {
      where: {
        id,
      },
    })
    return res.status(200).json({message:"Deletado"})
  }
}

export default userControlersDelete;
