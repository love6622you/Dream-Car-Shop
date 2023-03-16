import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { Formik, Field } from "formik";
import { forwardRef, useImperativeHandle } from "react";

type CarModalProps = {
  carName: string;
};

const initalValues = {
  user: "",
  phone: "",
  content: ""
};

const CarModal = forwardRef(({ carName }: CarModalProps, ref) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        onOpen();
      }
    }),
    []
  );

  return (
    <>
      <Modal
        size={"lg"}
        isOpen={isOpen}
        closeOnOverlayClick={false}
        isCentered
        motionPreset="slideInBottom"
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact us</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Formik
              initialValues={initalValues}
              onSubmit={(values) => {
                const { user, phone, content } = values;
                const a = document.createElement("a");
                a.href = `mailto:sales@dreamcar-rental.com?subject=I'm interested in the ${carName}&body=Name: ${user} %0D%0APhone: ${phone} %0D%0AContent: ${content}`;
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
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
});

CarModal.displayName = "CarModal";

export default CarModal;
