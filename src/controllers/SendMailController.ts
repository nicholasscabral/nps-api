import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { SurveysRepository } from "../repositories/SurveysRepository";
import { SurveysUsersRepository } from "../repositories/SurveysUsersRepository";
import { UsersRepository } from "../repositories/UsersRepository";

class SendMailController {

  async execute(req: Request, res: Response) {
    const { email, survey_id } = req.body;

    const usersRepository = getCustomRepository(UsersRepository)
    const surveysRepository = getCustomRepository(SurveysRepository)
    const surveysUsersRepository = getCustomRepository(SurveysUsersRepository)

    const userAlreadyExists = await usersRepository.findOne({email})

    if(!userAlreadyExists) {
      return res.status(400).json({
        message: 'user does not exists',
      })
    }

    const surveyAlreadyExists = await surveysRepository.findOne({id: survey_id})

    if(!surveyAlreadyExists) {
      return res.status(400).json({
        message: 'survey does not exists',
      })
    }

    // salvar as informações na tabela surveyuser
    const surveyUser = surveysUsersRepository.create({
      user_id: userAlreadyExists.id,
      survey_id
    })
    await surveysUsersRepository.save(surveyUser)
    // enviar email para o usuario

    return res.json(surveyUser)
  }
}

export { SendMailController }