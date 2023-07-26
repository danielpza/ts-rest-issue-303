import { initContract } from "@ts-rest/core";

const c = initContract();

interface Post {}

export const contract = c.router({
  omitBody: {
    method: "POST",
    path: "/posts",
    responses: {
      201: c.type<Post>(),
    },
    // body: c.type<{ title: string }>(),
    summary: "Create a post",
  },
});
