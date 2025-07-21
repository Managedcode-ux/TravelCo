import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import classes from "./disclaimer.module.css"

function Disclaimer({data}) {
    const disclimerText = data?.data?.Content
    return (
        <>
            <h1 className={classes.disclaimerHeading}>Disclaimer</h1>
            {Array.isArray(disclimerText) && (
                <BlocksRenderer content={disclimerText} />
            )}
        </>
    )
}

export default Disclaimer