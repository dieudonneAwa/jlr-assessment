import React from "react";
import { Flex } from "@chakra-ui/react";

export default React.forwardRef((props, ref) => (
  <Flex flexDir="column" ref={ref} {...props} />
));
