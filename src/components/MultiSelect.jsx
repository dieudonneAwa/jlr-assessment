import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Row from "./Row";

const MultiSelect = (props) => {
  const { selectedOptions = [], options = [], closeOnSelect, onSelect } = props;

  console.log(selectedOptions);

  return (
    <Menu closeOnSelect={closeOnSelect}>
      <MenuButton
        as={Button}
        rounded="3px"
        w="280px"
        rightIcon={<ChevronDownIcon />}
        fontWeight={400}
      >
        {selectedOptions.length ? (
          <Row>
            {selectedOptions.map((selected, i) => (
              <>
                <Text>{selected}</Text>
                {selectedOptions.length > 1 && selectedOptions.length - 1 !== i
                  ? ", "
                  : ""}
              </>
            ))}
          </Row>
        ) : (
          <>Select</>
        )}
      </MenuButton>
      <MenuList minWidth="200px">
        <MenuOptionGroup title="" type="radio">
          {options.map((option) => (
            <MenuItemOption
              key={option}
              onClick={() => onSelect(option)}
              value={option}
            >
              {option}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

MultiSelect.displayName = "MultiSelect";

export default MultiSelect;
