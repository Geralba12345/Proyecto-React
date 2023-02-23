import {Link} from "react-router-dom"
import './Item.css';
import Button from 'react-bootstrap/Button';
import { Card, Image, Stack, Heading, Text, CardBody, CardFooter, Divider, ButtonGroup,} from '@chakra-ui/react'

const Item = ({element}) => {
    return (
      <div>
        <Card maxW='sm'>
          <CardBody>
            <Image
              src={element.img}
              alt='Foto de producto'
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Heading size='md'>{element.name}</Heading>
              <Text color='blue.600' fontSize='2xl'>
              ${element.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing='2'>
            <Link variant="primary" to={`/ItemDetail/${element.id}`}>
              <Button variant='solid' colorScheme='blue'>
                Ver detalles
              </Button>
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      </div>
    )
}

export default Item;


