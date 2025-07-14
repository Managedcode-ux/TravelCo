export function getAllTripVariants(data) {
    const variantSet = new Set()
    const dataArray = data.data

    variantSet.add("All") // A default option available no matter what
    
    dataArray.forEach(trip => {
        const variant = trip.location_information.type
        variantSet.add(variant)
    });
    
    return Array.from(variantSet) //converted this set to array to be used in segment component
}