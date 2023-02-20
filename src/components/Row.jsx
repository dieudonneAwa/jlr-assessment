import React from "react";
import { Flex } from "@chakra-ui/react";

export default React.forwardRef((props, ref) => (
  <Flex flexDir="row" ref={ref} {...props} />
));
