import { initContract } from "@ts-rest/core";
import { initQueryClient } from "@ts-rest/react-query";

const c = initContract();

export const router = c.router({
  getPost: {
    method: "GET",
    path: `/posts`,
    responses: {
      200: c.type<any>(),
    },
  },
});

export const client = initQueryClient(router, {
  baseUrl: "http://localhost:3333",
  baseHeaders: {},
});

client.getPost.useQuery(["posts"], {});
