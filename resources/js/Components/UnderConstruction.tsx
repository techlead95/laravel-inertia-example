import { Center, Image } from '@mantine/core';

import underConstructionImage from '../../images/under-construction.jpeg';

export default function UnderConstruction() {
  return (
    <Center py="xl">
      <Image src={underConstructionImage} w={800} />
    </Center>
  );
}
