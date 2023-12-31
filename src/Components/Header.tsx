import { HStack, Heading } from "@chakra-ui/react";

interface Props {
  headerOne: string;
  headerTwo?: string;
  paddingLeft?: number;
  paddingRight: number;
  paddingYTwo?: number;
}

const Header = ({
  headerOne,
  headerTwo,
  paddingYTwo,
  paddingRight,
  paddingLeft,
}: Props) => {
  return (
    <HStack
      flexDirection={{ base: "column", lg: "row" }}
      alignContent={"center"}
      marginY={5}
      marginX={"5%"}
    >
      <Heading
        marginRight={{ base: 0, lg: 20 }}
        marginBottom={{ base: 5, lg: 0 }}
        fontWeight={500}
        borderRadius={"5px"}
        fontSize={{ base: "28px" }}
        paddingX={10}
        paddingY={2}
        color={"white"}
        backgroundColor="primary.100"
        width={{ base: "95%", lg: "50%" }}
      >
        {headerOne}
      </Heading>
      <Heading
        fontWeight={200}
        borderRadius={"5px"}
        paddingLeft={{ base: 1, lg: paddingLeft }}
        paddingRight={{ base: 1, lg: paddingRight }}
        paddingY={paddingYTwo}
        color={"white"}
        backgroundColor="primary.100"
        width={{ base: "95%", lg: "50%" }}
        fontSize={{ base: 25, lg: 18, xl: 25 }}
      >
        {headerTwo}
      </Heading>
    </HStack>
  );
};

export default Header;
