
import { Button, Popover, Dropdown, Container, Image, Radio, Text, useTheme } from '@nextui-org/react'

export default function Contact() {
  const menuItems = [
    { key: "fb", name: "Facebook", action: "" },
    { key: "email", name: "Email" },
    { key: "scam", name: "Scam Call" },
    { key: "house", name: "House Address" },
  ];
  return (
    <div className=" mt-2 md:mt-0 flex flex-col w-100 md:w-96">
      <Text weight="bold" blockquote>Contact</Text>
      <div className="py-4 px-4">
        <Text size={16} color="#26292B" className="leading-8"> Got some idea to improve penis shooter or any feedback, lorem ipsum ..asd.fa.sf.?</Text>
        <div className="-mx-4 mt-2">
          <Popover isBordered disableShadow placement="right">
            <Popover.Trigger>
              <Button auto animated={false} flat color="primary"><Text className="hover:underline">Connect me</Text></Button>
            </Popover.Trigger>
            <Popover.Content>
              <div className="p-4 flex flex-col">
                {menuItems.map(item => <a href={item.key} key={item.key} className="hover:underline"> {item.name} </a>)}
              </div>
            </Popover.Content>
          </Popover>
        </div>
      </div>
    </div>

  )

}
