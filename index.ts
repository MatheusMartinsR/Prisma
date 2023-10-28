import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

(async () => {
    const pessoa1 = await prisma.pessoa.create({
        data: {
            name: "Maria Eduarda",
            email: "teste@teste.com",
        },
    });
    console.log(pessoa1)
})();

(async () => {
    const pessoas = await prisma.pessoa.count();
    console.log(`Quantidade de Pessoas no banco:  ${pessoas}`)
})();

(async () => {
    const pessoas = await prisma.pessoa.findMany({
        where:{
            name:{
                startsWith: "M",
            },
        },
    });
    console.log(pessoas);
})();

(async () => {
    const pessoaComEndereco = await prisma.pessoa.create({
        data: {
            name:"Pessoa nova",
            email: "com1@endereco.com",
            enderecos:{
                create:{
                    rua: "Rua Exemplo",
                },
            },
        },
    });
    console.log(pessoaComEndereco);
})();



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

