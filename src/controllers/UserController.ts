import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

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

