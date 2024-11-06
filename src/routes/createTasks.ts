import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";
import { parse } from "csv-parse";
import { MultipartFile } from "@fastify/multipart";

export async function createTasks(app: FastifyInstance) {
  app.register(require("@fastify/multipart"), {
    limits: {
      fileSize: 5242880 // 5MB
    }
  });

  app.post("/tasks", async (request, reply) => {
    const file = await(request as any).file() as MultipartFile;
    const parser = file.file
      .pipe(parse({ columns: true, skip_empty_lines: true }));

    for await (const record of parser) {
      const { title, description } = record;
      await prisma.tasks.create({
        data: {
          title,
          description
        }
      });
    }

    reply.send({ message: "Tasks created from CSV" });
  });
}
