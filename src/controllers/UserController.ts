import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../models/User';

class UserController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const usersRepository = getRepository(User)

    const usersAlreadyExist = await usersRepository.findOne({ email })

    if(usersAlreadyExist) {
      return res.status(400).json({message: 'user already exists'});
    }

    const user = usersRepository.create({
      name: name,
      email: email
    })

    await usersRepository.save(user);

    return res.json(user);
  }
}

export { UserController }