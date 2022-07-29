
import { Button, Card, Row, Col, Image, Radio, Text, useTheme } from '@nextui-org/react'

export default function CardGrid({ width, height, bg }) {

  return (
    <Card css={{ w: width, h: height }}>
      <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
        <Col>
          <div className="bg-gray-800 opacity-75 w-40 p-1 rounded-xl">
            <Text size={12} weight="bold" transform="uppercase" color="#9E9E9E">
              Category
            </Text>
            <Text h3 color="white">
              Subcategory
            </Text>
          </div>
        </Col>
      </Card.Header>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={bg}
          objectFit="cover"
          width="100%"
          height="100%"
          alt="Relaxing app background"
        />
      </Card.Body>
      <Card.Footer
        isBlurred
        css={{
          position: "absolute",
          bgBlur: "#0f111466",
          borderTop: "$borderWeights$light solid $gray800",
          bottom: 0,
          zIndex: 1,
        }}
      >
        <Row>
          <Col>
            <Row>
              <Col>
                <Text color="white" size={12}>
                  Description of Item
                </Text>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row justify="flex-end">
              <Button
                flat
                auto
                rounded
                css={{ color: "#FCD34D", bg: "#94f9f026" }}
              >
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Read more
                </Text>
              </Button>
            </Row>
          </Col>
        </Row>
      </Card.Footer>
    </Card>

  )
}
