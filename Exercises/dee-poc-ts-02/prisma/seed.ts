import prisma from "../src/config/database.js";

async function populateUser() {
    try {
        await prisma.user.create({
            data: {
                name: "Test",
                email: "test@driven.com",
                cpf: "00000000000",
                password: "49764976",
                user_address_id: 1,
            },
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function populateUserAddress() {
    try {
        await prisma.userAddress.create({
            data: {
                name: "Casa",
                address_id: 1,
            },
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function populateAddress() {
    try {
        await prisma.address.create({
            data: {
                street: "Rua Teste",
                number: "000",
                district: "DistrictTest",
                city: "TestCity",
                state: "TestState",
                country: "UnitedTest",
            },
        });

        return true;
    } catch (error) {
        console.error(error);
        return false;
    }
}

async function main() {
    let user = await prisma.user.findFirst();

    if (!user) {
        const successfulPopulatedTableAddress = await populateAddress();

        if (successfulPopulatedTableAddress) {
            console.log("Successful populated Address table");
            const successfulPopulatedTableUserAddress =
                await populateUserAddress();

            if (successfulPopulatedTableUserAddress) {
                console.log("Successful populated UsersAddress table");
                const successfulPopulatedTableUser = await populateUser();

                if (successfulPopulatedTableUser) {
                    console.log("Successful populated Users table");
                }
            }
        }
    }
}

main()
    .then(() => {
        console.log("All tables were successfully populated!");
    })
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
