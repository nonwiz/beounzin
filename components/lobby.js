
import { Button, Container, Image, Radio, Text, useTheme } from '@nextui-org/react'

export default function Lobby() {
  return (
    <div className={`mt-10 md:mt-0 flex flex-col md:flex-row justify-center`} >
      <div>
        <Image width={160} height={160} src="https://picsum.photos/200" alt="profile image" objectFit="cover" className="rounded-full grayscale hover:grayscale-0" />
        <div className="flex mt-2 justify-center">
          <Text weight="bold">
            Hea Beoun
          </Text>

        </div>
        <div className="flex flex-col text-center justify-center">
          <Text size={20} css={{ textGradient: "20deg, $gray800 -20%, $gray600 80%" }}>Technical Artist</Text>
        </div>
      </div>
      <div className={`w-100 md:w-64 p-2 md:pl-10`}>
        <Text size={16} color="#26292B"> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.</Text>
      </div>
    </div >

  )

}
