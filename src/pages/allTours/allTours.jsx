import React from 'react'
import LocationCard from '../../components/LocationCard/locationCard'
import classes from './allTours.module.css'
import {fetchTourCards} from '../../api/tourAPI'
function ToursPage() {
    return (
        <div className = {classes.locationCartContainer}>
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </div>
    )
}

export default ToursPage