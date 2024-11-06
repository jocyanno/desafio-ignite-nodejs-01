import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getTaskts(app: FastifyInstance) {
  app.get("/tasks/:id", async (request, reply) => {
    const { title, description } = request.query as {
      title: string;
      description: string;
    };

    const { id } = request.params as { id: string };

    const tasks = await prisma.tasks.findMany({
      where: {
        id: id,
        title: {
          contains: title,
        },
        description: {
          contains: description,
        },
      },
    });

    reply.send(tasks);
  });
}
