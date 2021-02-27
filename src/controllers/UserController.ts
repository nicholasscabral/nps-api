import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';
import * as yup from 'yup';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const schema = yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required()
    })

    try {
      await schema.validate(req.body, { abortEarly: false })
    } catch (err) {
      return res.status(400).json({ message: err })
    }

    const usersRepository = getCustomRepository(UsersRepository)

    const usersAlreadyExist = await usersRepository.findOne({ email })

    if(usersAlreadyExist) {
      return res.status(400).json({message: 'user already exists'});
    }

    const user = usersRepository.create({
      name: name,
      email: email
    })

    await usersRepository.save(user);

    return res.status(201).json(user);
  }
}

export { UserController };

