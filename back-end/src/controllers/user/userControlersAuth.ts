import { Request, Response } from "express";
import { prismaClient } from "../../data/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class UserControlersAuth {
  static async allUsers(_req: Request, res: Response) {
    res.status(200).json({ message: "!" });
  }
  static async authUsers(_req: Request, res: Response) {
    const { id, email, password } = _req.body;
    if (!email) {
      res
        .status(422)
        .json({ message: "Preenchimento do email é obrigatorio!" });
      return;
    }
    if (!password) {
      res
        .status(422)
        .json({ message: "Preenchimento da Senha é obrigatorio!" });
      return;
    }
    const user = await prismaClient.user.findFirst({ where: { email: email } });
    if (!user) {
      res.status(422).json({ message: "Usuario não encontrado/Cadastrado" });
      return;
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      res.status(422).json({ message: "Senha Incorreta!" });
      return;
    }
    const tokenUser = jwt.sign({ id: id }, process.env.SECRET as string);
    res.status(200).json({ user, tokenUser });
  }
}

export default UserControlersAuth;
