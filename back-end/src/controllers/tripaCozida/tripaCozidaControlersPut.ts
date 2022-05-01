import { Request, Response } from "express"
import { prismaClient } from "../../data/prismaClient"

class TripaCozidaControlersPut {
  static async updateTripaCozida(_req: Request, res: Response) {
    try {
      const { id, mocoto, culatra, abomaso, fundo, tripa_fina, tripa_grossa } =
        _req.params
      const postData = await prismaClient.tripaCozida.findUnique({
        where: { id: Number(id) },
        select: {
          mocoto,
          culatra,
          abomaso,
          fundo,
          tripa_fina,
          tripa_grossa,
        },
      })
      const updatedTripaCozida = await prismaClient.tripaCozida.update({
        where: { id: Number(id) || undefined },
        select: {
          mocoto,
          culatra,
          abomaso,
          fundo,
          tripa_fina,
          tripa_grossa,
        },
      })
      res.json(updatedTripaCozida)
    } catch (e) {
      console.error(e)
      res.status(500).json({
        error: "O ID de Tripa Cozida informado, não existe na tabela!",
      })
    }
  }
}
export default TripaCozidaControlersPut
