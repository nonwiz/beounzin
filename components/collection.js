
import { Button, Card, Row, Col, Image, Radio, Text, Grid } from '@nextui-org/react';
import CardGrid from "./cardGrid";

export default function Garage() {

  const collection = [
    {
      bg: "https://picsum.photos/1200",
      width: "100%",
      height: "400px",
      xs: 12,
      category: "Category",
      subcategory: "Subcategory",
      demo: "#",
      description: "Description"
    }, {
      bg: "https://picsum.photos/seed/picsum/600",
      width: "100%",
      height: "400px",
      xs: 4,
      category: "Category",
      subcategory: "Subcategory",
      demo: "",
      description: "Description"
    }, {
      bg: "https://picsum.photos/id/100/600",
      width: "100%",
      height: "300px",
      xs: 4,
      category: "Category",
      subcategory: "Subcategory",
      demo: "",
      description: "Description"
    }, {
      bg: "https://picsum.photos/id/110/600",
      width: "100%",
      height: "400px",
      xs: 4,
      category: "Category",
      subcategory: "Subcategory",
      demo: "",
      description: "Description"
    }, {
      bg: "https://picsum.photos/id/220/600",
      width: "100%",
      height: "200px",
      xs: 6,
      category: "Category",
      subcategory: "Subcategory",
      demo: "",
      description: "Description"
    },
    {
      bg: "https://picsum.photos/600",
      width: "100%",
      height: "200px",
      xs: 6,
      category: "Category 1",
      subcategory: "Subcategory 1",
      demo: "",
      description: "Description"
    }
  ]


  return (
    <div className='flex -my-40 -mx-40 '>
      <div className="w-[800px]">
        <div className="p-2">
          <Grid.Container gap={2} justify="center">

            {collection.map((item, index) =>
              <Grid key={index} xs={item.xs}>
                <CardGrid bg={item.bg} width={item.width} height={item.height} category={item.category} subcategory={item.subcategory} demo={item.demo} description={item.description} />
              </Grid>
            )}
          </Grid.Container>
        </div>
      </div>
    </div >

  )

}
