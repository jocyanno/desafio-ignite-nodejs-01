import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function deleteTask(app: FastifyInstance) {
  app.delete("/tasks/:id", async (request, reply) => {
    const { id } = request.params as { id: string };

    const task = await prisma.tasks.delete({
      where: {
        id: parseInt(id),
      },
    });

    reply.send(task);
  });
}