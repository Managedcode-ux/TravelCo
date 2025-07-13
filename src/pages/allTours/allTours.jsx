import React from 'react'
import LocationCard from '../../components/LocationCard/locationCard'
import classes from './allTours.module.css'

import { fetchToursOverview } from "../../api/tourAPI"
import { useEffect, useState } from 'react'


function ToursPage() {
    const [allToursData, setAllToursData] = useState({ data: [], meta: {} })

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const tourOverviewData = await fetchToursOverview()
                setAllToursData(tourOverviewData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchTours()
    }, [])


    return (
        <div className={classes.locationCardsContainer}>
            {allToursData.data.map(tour => {
                const locationCardProps = {
                    imageURL: import.meta.env.VITE_serverURL+tour.location_images.card_image.url, /*Concatinating the image url with the server prefix e.g http://localhost:1337*/ 
                    name: tour.location_information.name,
                    status: tour.location_information.sold_out,
                    startDate: tour.trip_dates.start_date,
                    endDate: tour.trip_dates.end_date,
                    cost: tour.trip_pricing.regular_price
                };
                return <LocationCard key={tour.id} tourData={locationCardProps}/>;
            })}
        </div>

    )
}

export default ToursPage