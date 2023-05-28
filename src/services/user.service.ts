import { User } from "@prisma/client";
import { UserRepository } from "../repositories/user.repository";

const userRepository = new UserRepository();

export class UserService {
    getAll = async(filter: Partial<User>) => {
        let user = await userRepository.getAll(filter);
        return user;
    };

    getById = async(id: string) => {
        let user = await userRepository.getUnique({id});
        return user;
    };

    register = async(fields: Omit<User, "id">) => {
        let user = await userRepository.register(fields);
        return user;
    };

    update = async(id: string, fields: Omit<User, "id">) => {
        let user = await userRepository.update(id, fields);
        return user;
    };

    delete = async(id: string) => {
        let user = await userRepository.delete(id);
        return user;
    };
        
}