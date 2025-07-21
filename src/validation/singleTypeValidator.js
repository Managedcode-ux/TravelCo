// This file is used to fetch all the single type validators from strapi such as about us, faq, saftey etc.

import {z} from "zod"


// Frequently asked questions data validator
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

export const safteyTextStructure = z.looseObject({
    data:z.object({
        Content:z.array(z.any())
    }),
})

export const disclaimerStructure = z.looseObject({
    data:z.object({
        Content:z.array(z.any())
    })
})

export const cancellationAndRefundschema = z.looseObject({
    data:z.object({
        Content:z.array(z.any())
    })
})

export const contactValidation = z.looseObject({
    data:z.object({
        contact_option:z.array(z.object({
            type:z.string(),
            value:z.string(),
            id:z.number()
        }))
    })
})