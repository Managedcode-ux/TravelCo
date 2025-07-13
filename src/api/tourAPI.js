import { client } from "./strapiClient";
import {ToursOverviewStructure,ToursOverviewArraySchema} from "../validation/tourOverview"


export const fetchToursOverview = async () => {
    try {
        const toursCollection= client.collection('new-tours');
        const data = await toursCollection.find({
            populate: {
                location_information: { fields: ['name', 'sold_out'] },
                trip_pricing: { fields: ['regular_price'] },
                trip_dates: { fields: ['start_date', 'end_date'] },
                location_images: {
                    populate: {
                        card_image: { fields: ['url'] }
                    }
                }
            },
            sort: ['createdAt:desc'],
        });

        const validatedData = ToursOverviewArraySchema.parse(data);
        return validatedData;
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for tours overview:", error.errors);
        }else{
            console.error("Error fetching tours overview:", error);
        }
        throw error;
    }
}