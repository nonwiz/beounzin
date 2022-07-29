
import { Button, Card, Row, Col, Image, Radio, Text, Grid } from '@nextui-org/react';
import CardGrid from "./cardGrid";

export default function Garage() {


  return (
    <div className='flex -my-40 -mx-40 '>
      <div className="w-[800px]">
        <div className="p-2">
          <Grid.Container gap={2} justify="center">

            <Grid xs={12}>
              <CardGrid bg={"https://picsum.photos/1200"} width="100%" height="400px" />
            </Grid>

            <Grid xs={4}>
              <CardGrid bg={"https://picsum.photos/seed/picsum/600"} width="100%" height="400px" />
            </Grid>

            <Grid xs={4}>
              <CardGrid bg={"https://picsum.photos/id/100/600"} width="100%" height="300px" />
            </Grid>


            <Grid xs={4}>
              <CardGrid bg={"https://picsum.photos/id/110/600"} width="100%" height="400px" />
            </Grid>

            <Grid xs={6}>
              <CardGrid bg={"https://picsum.photos/id/220/600"} width="100%" height="200px" />
            </Grid>

            <Grid xs={6}>
              <CardGrid bg={"https://picsum.photos/600"} width="100%" height="200px" />
            </Grid>


          </Grid.Container>
        </div>
      </div>
    </div>

  )

}
