import jwt  from 'jsonwebtoken';
import { Request, Response } from "express"
import { prismaClient } from "../data/prismaClient"
import bcrypt from "bcrypt"


class userControlers{
    static allUsers(req: Request, res: Response){
        res.status(200).json({message:"!"})
    }
    //CADASTRO E CRIAÇÃO DE TOKEN
    static async postUsers(req: Request, res: Response){
        const{id, email, password} = req.body
        const nivelAcesso =  true
        if(!email){
            res.status(422).json({message: "Email é obrigatorio para cadastro de usuario!"})
            return
        } 
        const emailExist = await prismaClient.user.findUnique({ where: {email} })
        if(emailExist){
            res.status(422).json({message: "Email já cadastratado, informe um email valido!"})
            return 
        }
        const salt = await bcrypt.genSalt(12)
        const passwordHash = await bcrypt.hash(password, salt)
        const user = await prismaClient.user.create({
            data:{
                id,
                email,
                password: passwordHash,
                nivelAcesso
            }
        })
        const tokenUser = jwt.sign({id: id}, process.env.SECRET as string)
        res.status(201).json({id, email, nivelAcesso, tokenUser})
    }
    //LOGIN E COMPARAÇÃO DE SENHA
    static async authUsers(req: Request, res: Response){
        const{id, email, password} = req.body
        if(!email){
            res.status(422).json({message: "Preenchimento do email é obrigatorio!"})
            return
        } 
        if(!password){
            res.status(422).json({message: "Preenchimento da Senha é obrigatorio!"})
            return
        }        
        const user = await prismaClient.user.findFirst({ where: {email: email} })
        if(!user){
            res.status(422).json({message: "Usuario não encontrado/Cadastrado"})
            return
        }
        const checkPassword = await bcrypt.compare(password, user.password)
        if(!checkPassword){
            res.status(422).json({message: "Senha Incorreta!"})
            return
        }
        const tokenUser = jwt.sign({id: id}, process.env.SECRET as string)
        res.status(200).json({user, tokenUser})
    }
}

export default  userControlers