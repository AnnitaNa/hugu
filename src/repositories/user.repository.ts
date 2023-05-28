import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UserRepository {

    getAll = async(filter: Partial<User>) => {
        let user = await prisma.user.findMany({
            where: filter
        });
        return user;
    };

    getUnique = async(fields: Partial<User>) => {
        let user = await prisma.user.findUnique({
            where: fields
        });
        return user;
    };
    
    register = async(fields: Omit<User, "id">) => {
        const {userName, email, password } = fields;
        let user = await prisma.user.create({
            data: {
                userName,
                email,
                password
            }});
        return user;
    };

    update = async(id: string, fields: Omit<User, "id">) => {
        
        let user = await prisma.user.update({
            data: fields,
            where: {id}
        });
        return user;
    };

    delete = async(id: string) => {
        let user = await prisma.user.delete({
            where: {id}
        });
        return user;
    };

}

