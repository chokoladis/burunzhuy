import { faker } from '@faker-js/faker';
// @ts-ignore
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Очищаем старые данные (опционально)
    // await prisma.idea.deleteMany();
    // await prisma.user.deleteMany();

    // Создаем тестового юзера
    const groupUser = await prisma.group.create({
        data: {
            name: 'users',
            code: 'users',
        },
    });

    const user = await prisma.user.create({
        data: {
            email: faker.internet.email(),
            phone: faker.phone.number(),
            name: faker.lorem.word(),
            group_id: groupUser.id
        },
    });

    // Создаем 10 тестовых идей
    for (let i = 0; i < 10; i++) {
        await prisma.idea.create({
            data: {
                title: faker.commerce.productName(),
                short_description: faker.commerce.productDescription(),
                full_description: faker.commerce.productDescription(),
                enter_cost: parseFloat(faker.commerce.price({ min: 100, max: 1000 })),
                full_price: parseFloat(faker.commerce.price({ min: 1100, max: 5000 })),
                sellerId: user.id,
            },
        });
    }

    console.log('Seed completed! 🌱');
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());