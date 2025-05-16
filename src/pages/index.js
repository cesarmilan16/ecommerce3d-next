import React from 'react'
import { Button } from '@chakra-ui/react'

export default function Index() {
  return (
    <div>
      <h2>3D Hispalis</h2>
      <Button variant="primary" mr={2}>
        Comprar
      </Button>
      <Button variant="primary">
        Añadir al carrito
      </Button>
    </div>
  )
}

