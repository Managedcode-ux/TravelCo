import { Button, Paper, Text, Title, BackgroundImage } from '@mantine/core';
import classes from './locationCard.module.css';

function LocationCard() {
  // return (
  //   <Paper shadow="xl" p="xl" radius="md" className={classes.card}>
  //     <div>
  //       <Text className={classes.category} size="xs" >
  //         nature
  //       </Text>
  //       <Title order={3} className={classes.title} >
  //         Best forests to visit in North America
  //       </Title>
  //     </div>
  //     <Button variant="white" color="dark">
  //       Read article
  //     </Button>
  //   </Paper>
  // );

  return(
    <Paper shadow="sm" radius="md" withBorder p="xl" className={classes.card}>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        radius="md"
      >
        
      </BackgroundImage>
    </Paper>
  )
}



export default LocationCard