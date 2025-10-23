import fastify, { FastifyReply, FastifyRequest } from "fastify";
import cors from "@fastify/cors";
import { fastifyTRPCPlugin } from "@trpc/server/adapters/fastify";
import { createContext } from "./trpc/context";
import { router, publicProcedure } from "./trpc/trpc";

const server = fastify({ logger: true });

const appRouter = router({
	helloWorld: publicProcedure.query(async () => {
		return "Olá mundo";
	})
});

export type AppRouter = typeof appRouter;

server.register(cors, { origin: "*" });

server.register(fastifyTRPCPlugin, {
	prefix: "/trpc",
	trpcOptions: { router: appRouter, createContext }
});

server.get("/", (req: FastifyRequest, rep: FastifyReply) => {
	return rep.send({ message: "Hello world!" });
});

server.listen({ port: 3003 }).then(
	() => console.log(`Port is running on port 3003`)
);