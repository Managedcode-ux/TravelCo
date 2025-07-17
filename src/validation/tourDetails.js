import { z } from "zod";

export const TourDetailsStructure = z.looseObject({
    id:z.number(),
    inclusion_exclusion:z.object({
        exclusions:z.array(z.any()),
        inclusions:z.array(z.any())
    }),
    location_images:z.object({
        all_images:z.array(z.object({
            id:z.number(),
            url:z.string()
        }))
    }),
    location_information:z.object({
        additional_info:z.array(z.any()),
        highlights:z.array(z.any()),
        name:z.string(),
        overview:z.array(z.any()),
        sold_out:z.boolean(),
        type:z.string(),
    }),
    trip_dates:z.object({
        end_date:z.string(),
        start_date:z.string()
    }),
    trip_itenary:z.array(z.object({
        id:z.number(),
        day_number:z.string(),
        items:z.array(z.any())
    })),
    trip_pricing:z.object({
        regular_price:z.number(),
        slot_reservation_price:z.number()
    })
})

export const TourDetailSchema = z.object({
    data:TourDetailsStructure,
    meta:z.any()
})