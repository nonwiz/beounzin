import { Button, Container, Image, Radio, Text, useTheme } from '@nextui-org/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Grid } from "@nextui-org/react";
import Lobby from "../components/lobby";
import Garage from "../components/garage";
import Contact from "../components/contact";
import Collection from "../components/collection";
import { useState, useEffect } from "react";
import useMedia from '@/components/useMedia';




export default function Home() {
  const [isMd, setIsMd] = useState(false);
  const [navi, selectNavi] = useState('lobby');

  const content = {
    'lobby': <Lobby />,
    'garage': <Garage />,
    'contact': <Contact />,
    'collection': <Collection />

  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const matchMd = window.matchMedia("(min-width: 700px)")
      setIsMd(matchMd.matches);
    }


  })

  return (
    <div>
      <Head>
        <title>Hea Beoun | Portfolio</title>
        <meta name="description" content="Sne tae jolnai" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sm>
        <main className={`${isMd ? "pt-40" : "pt-10"}`}>
          <Grid.Container gap={1} justify="space-between" wrap="wrap-reverse">
            <Grid>
              {content[navi]}
            </Grid>

            <Grid xs={2}>
              <div className={`flex flex-col -mx-4 md:mx-2 ${isMd ? 'px-10' : 'px-0'}`}>
                <Radio.Group label="Navigation"
                  orientation={isMd ? "vertical" : "horizontal"}
                  defaultValue="lobby"
                  onChange={selectNavi}
                  value={navi}
                  color="primary"
                  labelColor="black"
                >
                  <Radio value="lobby" size={isMd ? "md" : "xs"}>LOBBY</Radio>
                  <Radio value="garage" size={isMd ? "md" : "xs"}>GARAGE</Radio>
                  <Radio value="collection" size={isMd ? "md" : "xs"}>COLLECTION</Radio>
                  <Radio value="contact" size={isMd ? "md" : "xs"}>CONTACT</Radio>
                </Radio.Group>
              </div>
            </Grid>
          </Grid.Container>

        </main>
      </Container>
    </div >
  )
}
