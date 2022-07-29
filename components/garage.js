
import { Button, Collapse, Container, Image, Radio, Text, useTheme } from '@nextui-org/react'

export default function Garage() {
  return (
    <div className='flex'>
      <div className="w-96">
        <Text weight="bold" blockquote>Garage</Text>
        <Collapse.Group className="mt-2">

          <Collapse title="Technical Artist" expanded>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Text>
          </Collapse>

          <Collapse title="Former Pipeline Director">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Text>
          </Collapse>

          <Collapse title="Photographer">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </Text>
          </Collapse>


        </Collapse.Group>
      </div>
    </div>

  )

}
