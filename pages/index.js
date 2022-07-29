import { Button, Container, Image, Radio, Text, useTheme } from '@nextui-org/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Grid } from "@nextui-org/react";
import Lobby from "../components/lobby";
import Garage from "../components/garage";
import Contact from "../components/contact";
import Collection from "../components/collection";
import { useState } from "react";
import useMedia from '@/components/useMedia';




export default function Home() {
  const isMd = useMedia('(min-width: 768px)')

  const [navi, selectNavi] = useState('lobby');
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
        <main className={isMd ? "pt-40" : "pt-10"}>
          <Grid.Container gap={1} justify="space-between" wrap="wrap-reverse">
            <Grid>
              {content[navi]}
            </Grid>

            <Grid>
              <div className={`flex flex-col ${isMd ? 'px-10' : 'px-1'}`}>
                <Radio.Group label="Navigation"
                  orientation={isMd ? "vertical" : "horizontal"}
                  defaultValue="lobby"
                  onChange={selectNavi}
                  value={navi}
                  color="primary"
                  labelColor="black"
                >
                  <Radio value="lobby" size={isMd ? "md" : "sm"}>LOBBY</Radio>
                  <Radio value="garage" size={isMd ? "md" : "sm"}>GARAGE</Radio>
                  <Radio value="collection" size={isMd ? "md" : "sm"}>COLLECTION</Radio>
                  <Radio value="contact" size={isMd ? "md" : "sm"}>CONTACT</Radio>
                </Radio.Group>
              </div>
            </Grid>
          </Grid.Container>

        </main>
      </Container>
    </div >
  )
}
