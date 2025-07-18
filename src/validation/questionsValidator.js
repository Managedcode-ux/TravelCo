import {z} from "zod"

const faqStructure = z.object({
    id:z.number(),
    answer:z.string(),
    question:z.string()
})

export const faqArraySchema = z.object({
    data:z.object({
        questions:z.array(faqStructure)
    }),
    meta:z.any()
})