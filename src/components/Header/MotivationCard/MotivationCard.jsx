import { Box, Text } from './MotivationCard.styled';

const MotivationCard = ({ type, value }) => {
  return (
    <Box>
      <Text>
        {type}: {value}
      </Text>
    </Box>
  );
};
export default MotivationCard;
