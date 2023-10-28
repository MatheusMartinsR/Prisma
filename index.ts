import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();




(async () => {
    const pessoas = await prisma.pessoa.findMany({
        select:{
            id: true,
            email:true,
            name:true,
            enderecos: true,
        }
    });
    const enderecos = await prisma.endereco.count();
    console.log({pessoas, enderecos});
})();

