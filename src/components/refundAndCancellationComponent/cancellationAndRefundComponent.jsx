import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import classes from './cancellationAndRefundComponent.module.css'
function CancellationAndRefund({ text }) {
    const contentArray = text?.data?.Content
    return (
        <>
            <h1 className={classes.cancellationdAndRefundHeading}>Cancellation & Refund</h1>
            {Array.isArray(contentArray) &&<BlocksRenderer content={contentArray} />}
        </>
    )
}

export default CancellationAndRefund