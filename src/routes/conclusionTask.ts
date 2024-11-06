import { FastifyInstance } from "fastify";

export async function conclusiontTask(app: FastifyInstance) {
  app.put("/tasks/:id/complete", async (request, reply) => {
    
  });
}
