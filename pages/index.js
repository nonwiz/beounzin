import { Button, Container, Image, Radio, Text, useTheme } from '@nextui-org/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Grid } from "@nextui-org/react";
import Lobby from "../components/lobby";
import Garage from "../components/garage";
import Contact from "../components/contact";
import Collection from "../components/collection";
import { useState } from "react";




export default function Home() {
  const { theme } = useTheme();
  const [navi, selectNavi] = useState('lobby');
  console.log(navi);
  const content = {
    'lobby': <Lobby />,
    'garage': <Garage />,
    'contact': <Contact />,
    'collection': <Collection />

  }


  return (
    <div>
      <Head>
        <title>Hea Beoun | Portfolio</title>
        <meta name="description" content="Sne tae jolnai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sm>
        <main className="pt-40"> <Grid.Container gap={1} justify="space-between">
          <Grid>
            {content[navi]}
          </Grid>

          <Grid>
            <div className="flex flex-col px-10">
              <Radio.Group label="Navigation" defaultValue="lobby" onChange={selectNavi} value={navi} color="primary" labelColor="black">
                <Radio value="lobby">LOBBY</Radio>
                <Radio value="garage">GARAGE</Radio>
                <Radio value="collection">COLLECTION</Radio>
                <Radio value="contact">CONTACT</Radio>
              </Radio.Group>
            </div>
          </Grid>
        </Grid.Container>

        </main>

        <footer>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className=''
          >
          </a>
        </footer>
      </Container>
    </div>
  )
}
