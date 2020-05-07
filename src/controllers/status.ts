import boom from "boom";
import { ServerResponse } from "http";
import { FastifyRequest, FastifyReply } from "fastify";

interface StatusResponse {
    status: string;
}

export const getStatus = async (): Promise<StatusResponse> => ({ status: "ok" });
