import { prisma } from "@/lib/prisma";

async function main() {
  // Create demo users
  const user1 = await prisma.user.create({
    data: {
      email: "john.doe@example.com",
      phone: "1234567890",
      name: "John Doe",
      fathersName: "Richard Doe",
      password: "password123",
      addresses: {
        create: [
          {
            street: "123 Main St",
            city: "Anytown",
            state: "Anystate",
            zip: "12345",
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "jane.smith@example.com",
      phone: "0987654321",
      name: "Jane Smith",
      fathersName: "Robert Smith",
      password: "password456",
      addresses: {
        create: [
          {
            street: "456 Elm St",
            city: "Othertown",
            state: "Otherstate",
            zip: "67890",
          },
        ],
      },
    },
  });

  console.log({ user1, user2 });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
