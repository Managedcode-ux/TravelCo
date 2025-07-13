import { z } from 'zod'

export const ToursOverviewStructure = z.object({
    id: z.number(),
    location_information: z.object({
        name: z.string(),
        sold_out: z.boolean()
    }),
    location_images: z.object({
        card_image: z.object({
            url: z.string()
        })
    }),
    trip_pricing: z.object({
        regular_price: z.number()
    }),
    trip_dates: z.object({
        start_date: z.string(),
        end_date: z.string()
    })
})

export const ToursOverviewArraySchema = z.object({
    data:z.array(ToursOverviewStructure),
    meta:z.any()
})
