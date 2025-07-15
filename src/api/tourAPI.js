import { client } from "./strapiClient";
import { ToursOverviewStructure, ToursOverviewArraySchema } from "../validation/tourOverview"

// Fetches the tour details in brief which are only required to render the tour card 
export const fetchToursOverview = async () => {
    try {
        const toursCollection = client.collection('new-tours');
        const data = await toursCollection.find({
            // filters: {
            //     location_information: {
            //         type: {
            //             $eq: 'International'
            //         }
            //     }
            // },
            populate: {
                location_information: { fields: ['name', 'sold_out', 'type'] },
                trip_pricing: { fields: ['regular_price'] },
                trip_dates: { fields: ['start_date', 'end_date'] },
                location_images: {
                    populate: {
                        card_image: { fields: ['url','formats'] }
                    }
                }
            },
            sort: ['createdAt:desc'], // sorting the result in descending to get the latest post that was added
        });
        // console.log("Invalidated Data", data)
        const validatedData = ToursOverviewArraySchema.parse(data);
        return validatedData;
    } catch (error) {
        if (error.name === "ZodError") {
            console.error("Validation failed for tours overview:", error.errors);
        } else {
            console.error("Error fetching tours overview:", error);
        }
        throw error;
    }
}


// Fetches the tour details in depth required to render the tour details page 
export const fetchTourDetails = async (tourId) => {

    try {
        const tourCollection = client.collection('new-tours');
        const data = await tourCollection.findOne(tourId, {
            populate: {
                location_information: '*',
                trip_pricing: '*',
                trip_dates: '*',
                trip_itenary: "*",
                inclusion_exclusion: "*",
                location_images: {
                    populate: {
                        all_images: { fields: ['url'] }
                    }
                }
            }
        })
        return data
    } catch (error) {
        console.log("Error fetching tour details:", error);
        throw error;
    }
}

