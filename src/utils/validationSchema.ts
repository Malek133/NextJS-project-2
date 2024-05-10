import { z } from "zod";

export const createArticleSchema = z.object({
    title: z.string().min(2,{ message: "title should be at least 2 characters long" }).max(100,{ message: "title should be less than 200 characters" }),
    body: z.string().min(10)
})