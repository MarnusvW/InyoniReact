import { Box, HStack } from "@chakra-ui/react";
import IconInfoList from "./IconInfoList";
import Logo from "./Logo";
import NavigationList from "./NavigationList";

interface Props {
  pageId: number;
}

const NavBar = ({ pageId }: Props) => {
  return (
    <Box
      bgColor="#fff"
      width="100vw"
      height={{ base: "105px", lg: "130px" }}
      position="fixed"
      zIndex={5}
    >
      <IconInfoList></IconInfoList>
      <HStack justifyContent="space-between" paddingX={{ base: 2, lg: 10 }}>
        <Logo></Logo>
        <NavigationList pageId={pageId}></NavigationList>
      </HStack>
    </Box>
  );
};

export default NavBar;
