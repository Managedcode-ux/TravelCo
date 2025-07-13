import { Button } from '@mantine/core';
import classes from './locationCard.module.css';

function LocationCard({tourData}) {
  const{imageURL,name,status,startDate,endDate,cost} = tourData
  
  const cardInlineStyle = {
    backgroundImage: `url(${imageURL})`
  }


  //change the date format to dd/month/yy from yy--mm--dd(recived from the backend)
  const dateFormatter = new Intl.DateTimeFormat("en-GB",{
    day:"2-digit",
    month:"short",
    year:"2-digit"
  })

  const formatterStartDate = dateFormatter.format(new Date(startDate))
  const formatterEndDate = dateFormatter.format(new Date(endDate))

  return (
    <div className={classes.card} style={cardInlineStyle}>
      { status && <span className={classes.status}>Sold Out</span>}
      <div className={classes.infoContainer}>
        <h3 className={classes.title} >{name}</h3>
        <div className={classes.priceAndDateContainer}>
          <span className={classes.price}>{cost} ₹</span>
          <span className={classes.date}>{formatterStartDate} - {formatterEndDate}</span>
        </div>
        <Button variant='filled' className={classes.viewDetailBtn} >
          view details
        </Button>
      </div>
    </div>
  )
}



export default LocationCard