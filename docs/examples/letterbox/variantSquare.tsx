import { Flex, Image, Letterbox } from 'gestalt';

export default function Example() {
  return (
    <Flex alignItems="center" height="100%" justifyContent="center" width="100%">
      <Letterbox contentAspectRatio={1} height={200} width={200}>
        <Image
          alt="Example image"
          naturalHeight={1}
          naturalWidth={1}
          src="https://i.ibb.co/FY2MKr5/stock6.jpg"
        />
      </Letterbox>
    </Flex>
  );
}
