import { FastifyInstance } from "fastify";

export async function updateTasks(app: FastifyInstance) {
  app.put("/tasks/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    const { title, description } = request.body as {
      title: string;
      description: string;
    };

    reply.send({ id, title, description });
  });
}
