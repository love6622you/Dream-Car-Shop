import useCustomModal from "@/hook/useModal";
import { forwardRef, useImperativeHandle } from "react";
import CarModalForm from "./CarModalForm";

type CarModalProps = {
  carName: string;
};

const CarModal = forwardRef(({ carName }: CarModalProps, ref) => {
  useImperativeHandle(
    ref,
    () => ({
      show: () => {
        onOpen();
      }
    }),
    []
  );

  const handleClose = () => {
    onClose();
  };

  const { modal, onOpen, onClose } = useCustomModal({
    title: "Contact us",
    content: <CarModalForm carName={carName} onClose={handleClose} />,
    hasFooter: false
  });

  return <>{modal}</>;
});

CarModal.displayName = "CarModal";

export default CarModal;
