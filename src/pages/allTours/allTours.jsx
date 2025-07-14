import React from 'react'
import LocationCard from '../../components/LocationCard/locationCard'
import classes from './allTours.module.css'

import {getAllTripVariants} from "./allToursUtils"
import { fetchToursOverview } from "../../api/tourAPI"
import { useEffect, useState } from 'react'
import { SegmentedControl } from '@mantine/core'


function ToursPage() {
    const [allToursData, setAllToursData] = useState({ data: [], meta: {} })
    const [availableVariants, setavailableVariants] = useState([]) //To be used in the Segmented Control component
    const [selectedVariant,setSelectedVariant] = useState('All')
    // const [sortBy,setSortBy] = useState('')  //setup sorting logic

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const tourOverviewData = await fetchToursOverview()
                setAllToursData(tourOverviewData)
                setavailableVariants(getAllTripVariants(tourOverviewData)) 

            } catch (error) {
                console.log(error)
            }
        }
        fetchTours()
    }, [])

    console.log("ALL TOURS=>", allToursData)
    return (
        <div className={classes.mainContainer}>
            {/* quick switch section to select trip variants like International,domestic,Weekend etc.*/}
            <div className={classes.categorySelector}>
                <SegmentedControl
                    radius="md"
                    size="sm"
                    value={selectedVariant}
                    onChange={setSelectedVariant}
                    data={availableVariants.length > 0 ? availableVariants:[]}
                />
            </div>


            {/* Tour Cards contianer */}
            <div className={classes.locationCardsContainer}>
                {allToursData.data.map(tour => {
                    const locationCardProps = {
                        id: tour.documentId,
                        imageURL: import.meta.env.VITE_serverURL + tour.location_images.card_image.url, /*Concatinating the image url with the server prefix e.g http://localhost:1337*/
                        name: tour.location_information.name,
                        status: tour.location_information.sold_out,
                        startDate: tour.trip_dates.start_date,
                        endDate: tour.trip_dates.end_date,
                        cost: tour.trip_pricing.regular_price
                    };
                    return <LocationCard key={tour.id} tourData={locationCardProps} />;
                })}
            </div>
        </div>

    )
}

export default ToursPage