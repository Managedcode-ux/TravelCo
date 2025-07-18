import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import classes from "./Itenary.module.css"
function Itenary({ data }) {
    return (
        <>
            {
                data.map(dayItenary => {
                    return (
                        <div className={classes.itenaryItemContainer} key={dayItenary.id}>
                            <div className={classes.dayNumber}>{dayItenary.day_number}</div>
                            <BlocksRenderer content={dayItenary.items} className={classes.itenaryList} />
                        </div>
                    )
                })
            }
        </>
    )
}


export default Itenary