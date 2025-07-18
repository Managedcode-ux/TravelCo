import React from 'react'
import LocationCard from '../../components/LocationCard/locationCard'
import classes from './allTours.module.css'

import { getAllTripVariants } from "./allToursUtils"
import { fetchToursOverview } from "../../api/tourAPI"
import { useEffect, useState } from 'react'
import { SegmentedControl } from '@mantine/core'


function ToursPage() {
    const [allToursData, setAllToursData] = useState({ data: [], meta: {} })
    const [availableVariants, setavailableVariants] = useState([]) //To be used in the Segmented Control component
    const [selectedVariant, setSelectedVariant] = useState('All')
    const [filteredData, setFilteredData] = useState({ data: [], meta: {} }) // The filtered data would be stored as copy of original data to prevent mutating it
    //  const [filterBy,setFilterBy] = useState('')  //setup sorting logic

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const tourOverviewData = await fetchToursOverview()
                setAllToursData(tourOverviewData)
                setFilteredData(tourOverviewData) // initially filtered data would be same as non-mutated data as no filter is applied initially
                setavailableVariants(getAllTripVariants(tourOverviewData))

            } catch (error) {
                console.log(error)
            }
        }
        fetchTours()
    }, [])

    useEffect(() => {
        function applyFiltersAndVariants() {
            const tripsArray = allToursData.data
            const filteredtripsArray = tripsArray.filter(trip => {
                if (trip.location_information.type === selectedVariant) {
                    return true
                } else if (selectedVariant === 'All') {
                    return true
                }
            })
            return filteredtripsArray;
        }

        const filteredTripsArray = applyFiltersAndVariants()
        setFilteredData(prevState => (
            {
                ...prevState,
                data: filteredTripsArray
            }
        ))

    }, [selectedVariant,allToursData])




    console.log("ALL TOURS=>", allToursData)
    return (
        <div className={classes.allToursPageContainer}>
            {/* quick switch section to select trip variants like International,domestic,Weekend etc.*/}
            <div className={classes.categorySelector}>
                <SegmentedControl
                    radius="md"
                    size="sm"
                    value={selectedVariant}
                    onChange={setSelectedVariant}
                    data={availableVariants.length > 0 ? availableVariants : []}
                />
            </div>


            {/* Tour Cards contianer */}
            <div className={classes.locationCardsContainer}>
                {filteredData.data.map(tour => {
                    const locationCardProps = {
                        id: tour.documentId,
                        /*Concatinating the image url with the server prefix e.g http://localhost:1337 */
                        imageURL: import.meta.env.VITE_serverURL + tour.location_images.card_image.formats.small.url, 
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