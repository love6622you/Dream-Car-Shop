import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";
import { Formik, Field } from "formik";

type CarModalFormProps = {
  carName: string;
  onClose: () => void;
};

const initalValues = {
  user: "",
  phone: "",
  content: ""
};

const EMAIL = import.meta.env.VITE_APP_EMAIL;

const CarModalForm = ({ carName, onClose }: CarModalFormProps) => {
  return (
    <Formik
      initialValues={initalValues}
      onSubmit={(values) => {
        const { user, phone, content } = values;
        const a = document.createElement("a");
        a.href = `mailto:${EMAIL}?subject=I'm interested in the ${carName}&body=Name: ${user} %0D%0APhone: ${phone} %0D%0AContent: ${content}`;
        a.click();
        onClose();
      }}
    >
      {({ handleSubmit, errors }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={5} pb={5}>
            <Text>{carName}</Text>
            <FormControl>
              <FormLabel htmlFor="user">Name</FormLabel>
              <Field
                as={Input}
                id="user"
                name="user"
                type="text"
                variant={"filled"}
                placeholder="Name"
              />
              <FormErrorMessage>{errors.user}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="phone">Phone</FormLabel>
              <Field
                as={Input}
                id="phone"
                name="phone"
                type="number"
                variant={"filled"}
                placeholder="Phone number"
              />
              <FormErrorMessage>{errors.phone}</FormErrorMessage>
            </FormControl>

            <FormControl>
              <FormLabel htmlFor="content">Content</FormLabel>
              <Field
                as={Textarea}
                id="content"
                name="content"
                type="text"
                variant={"filled"}
                placeholder="Content"
              />
              <FormErrorMessage>{errors.content}</FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="blue" width="full">
              Submit
            </Button>
          </VStack>
        </form>
      )}
    </Formik>
  );
};

export default CarModalForm;
