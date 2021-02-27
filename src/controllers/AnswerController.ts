import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";

class AnswerController {

  // http://localhost:3333/answers/8?u=730a2476-1fda-4c96-93bd-bc2487bf7caa

  async execute(req: Request, res: Response) {
    const { value } = req.params;
    const { u } = req.query;

    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const surveyUser = await surveysUsersRepository.findOne({ id: String(u) })

    if (!surveyUser) {
      throw new AppError("Survey User does not exist")
    }

    surveyUser.value = Number(value)

    await surveysUsersRepository.save(surveyUser)

    return res.status(200).json(surveyUser)
  }
}

export { AnswerController }