import { Button, Container, Image, Radio, Text, useTheme } from '@nextui-org/react'
import Head from 'next/head'
import styles from '../styles/Home.module.css';
import { Grid, Spacer, Dropdown, Avatar } from "@nextui-org/react";
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
  }, [])

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
                <Container xs>
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
                    <Radio value="contact" size={isMd ? "md" : "xs"} className="hidden md:block">CONTACT</Radio>
                  </Radio.Group>

                </Container>
              </div>
            </Grid>
          </Grid.Container>
          <div className="fixed bottom-0 right-0 m-2 md:hidden">
            <Dropdown placement="bottom-left">
              <Dropdown.Trigger>
                <Button className="shadow z-10 bg-gray-400 p-1 w-10 h-10 rounded-full" auto>
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </>
                </Button>
              </Dropdown.Trigger>
              <Dropdown.Menu color="primary" aria-label="Avatar Actions">
                <Dropdown.Item key="profile" css={{ height: "$18" }}>
                  <Text b color="inherit" css={{ d: "flex" }}>
                    heabeoun@example.com
                  </Text>
                </Dropdown.Item>
                <Dropdown.Item withDivider>
                  Facebook
                </Dropdown.Item>
                <Dropdown.Item withDivider>
                  Twitter
                </Dropdown.Item>

              </Dropdown.Menu>
            </Dropdown>

          </div>

        </main>
      </Container>
    </div >
  )
}
