// This api fetches all the card for the all tours page
export async function fetchTourCards() {
    try {
        const response = await fetch('https://api.example.com/tours');
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data
    } catch (error) {
        console.log("Error fetching tour cards:", error);
        throw error; 
    }
}
