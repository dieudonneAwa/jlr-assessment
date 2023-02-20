import logo from "./logo.svg";
import "./App.css";
import { Button, ChakraProvider, Flex, Select, Text } from "@chakra-ui/react";
import { useState } from "react";
import { MultiSelect, Col, Row } from "./components";

const vehicleModelOptions = [
  "I-Pace",
  "F-Type",
  "Range Rover",
  "Range Rover Sport",
];

const modelYears = [
  "2010",
  "2011",
  "2012",
  "2013",
  "2014",
  "2015",
  "2016",
  "2017",
  "2018",
  "2019",
  "2020",
  "2021",
  "2022",
  "2023",
];

function App() {
  const [isSubmitted, setisSubmitted] = useState(false);
  const [formFields, setFormFields] = useState([
    {
      index: 0,
      model: "",
      years: [],
    },
  ]);

  return (
    <ChakraProvider>
      <Col
        as="form"
        flexDir="column"
        py={20}
        align="center"
        maxW="900px"
        mx="auto"
        gap={10}
      >
        {formFields.map((fields, i) => (
          <Row key={i} gap="2rem" borderBottomWidth={1} py={4}>
            <Row align="center" gap="3rem">
              <Text>Vehicle Model:</Text>
              <MultiSelect
                onSelect={(value) => {
                  setFormFields((prev) =>
                    prev.map((val) => {
                      if (val.index === i) {
                        return { ...val, model: value };
                      }
                      return val;
                    })
                  );
                }}
                closeOnSelect
                selectedOptions={[fields.model]}
                options={vehicleModelOptions}
              />
            </Row>
            <Row align="center" gap="3rem">
              <Text>Vehicle Model:</Text>
              <MultiSelect
                onSelect={(value) => {
                  setFormFields((prev) =>
                    prev.map((val) => {
                      if (val.index === i) {
                        return { ...val, years: [...val.years, value] };
                      }
                      return val;
                    })
                  );
                }}
                closeOnSelect={false}
                selectedOptions={fields.years}
                options={modelYears}
              />
            </Row>
          </Row>
        ))}
        <Button
          onClick={() =>
            setFormFields((prev) => [
              ...prev,
              { index: prev.length, model: "", years: "" },
            ])
          }
          rounded="full"
          w="full"
        >
          Add more vehicle qualifier
        </Button>

        <Button
          onClick={() => {
            setisSubmitted(true);
            console.log(formFields);
          }}
        >
          Submit
        </Button>

        <Flex>{isSubmitted && JSON.stringify(formFields)}</Flex>
      </Col>
    </ChakraProvider>
  );
}

export default App;
