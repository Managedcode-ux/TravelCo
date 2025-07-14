import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react'
import {fetchTourDetails} from "../../api/tourAPI"

function TourDetails(){
    const {id} = useParams();
    const [tour,setTour] = useState();

    useEffect(()=>{
        const fetchDetails = async() => {
            const detailsData = await fetchTourDetails(id);
            setTour(detailsData)
        }

        fetchDetails()
    },[id])

    console.log(tour)

    return (
        <div>
            {JSON.stringify(tour)}
        </div>
    )
}

export default TourDetails