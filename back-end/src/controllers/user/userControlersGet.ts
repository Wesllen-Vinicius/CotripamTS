import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";

class UserControlersGet {
  static async allUsers(_req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  static async getUsersById(_req: Request, res: Response) {
    const id = parseInt(_req.params.id);
    console.log(id);
    const user = await prismaClient.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      return res.status(404).json({ error: "Usuario não encontrada" });
    }
    return res.status(200).json(user);
  }

  static async getUsers(_req: Request, res: Response) {
    const user = await prismaClient.user.findMany();
    return res.status(200).json(user);
  }
}

export default UserControlersGet;
