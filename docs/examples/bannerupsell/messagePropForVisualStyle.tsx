import { BannerUpsell, Box, Flex, Link, Text } from 'gestalt';

export default function Example() {
  return (
    <Box alignItems="center" display="flex" height="100%" justifyContent="center" padding={8}>
      <Flex direction="column" gap={6}>
        <Text weight="bold">Simple message string</Text>
        <BannerUpsell
          message="Earn $60 of ads credit, and give $30 of ads credit to a friend"
          title="Give $30, get $60 in ads credit"
        />
        <Text weight="bold">Rich message with Text component</Text>
        <BannerUpsell
          message={
            <Text inline>
              Earn $60 of ads credit, and give $30 of ads credit to a friend.{' '}
              <Link accessibilityLabel="Learn more about credit" display="inline" href="#Message">
                Learn more
              </Link>
            </Text>
          }
          title="Give $30, get $60 in ads credit"
        />
      </Flex>
    </Box>
  );
}
