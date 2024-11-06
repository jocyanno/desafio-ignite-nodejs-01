import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import { getTaskts } from "./routes/getTasks";
import { conclusiontTask } from "./routes/conclusionTask";
import { createTasks } from "./routes/createTasks";
import { deleteTask } from "./routes/deleteTasks";
import { updateTasks } from "./routes/updateTasks";

const app = fastify();

app.register(fastifyCors, {
  origin: "*"
});

app.register(conclusiontTask);
app.register(createTasks);
app.register(getTaskts);
app.register(deleteTask);
app.register(updateTasks);

app.listen({ port: 3000, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3000");
});
