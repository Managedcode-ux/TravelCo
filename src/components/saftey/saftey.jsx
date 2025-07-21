import { BlocksRenderer } from "@strapi/blocks-react-renderer"
import classes from './saftey.module.css'

function SafteyText({text}) {
    const content = text?.data?.Content 
    return(
        <>
          <h1 className={classes.safteyHeading}>Saftey</h1>
          {Array.isArray(content) && <BlocksRenderer content={content}/>}
        </>
    )
}

export default SafteyText