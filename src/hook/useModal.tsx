import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from "@chakra-ui/react";
import React from "react";

type ModalProps = {
  [key: string]: any;
  type: string;
};

const useModal = ({ config, type }: ModalProps) => {
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const onOk = () => {
    config.onOk && config.onOk();
  };
  const onCancel = () => {
    config.onCancel && config.onCancel();
    setVisible(false);
  };

  const contentText = config.isLoading ? <span>test</span> : config.content;

  const modal = (
    <Modal
      forceRender
      title={config.title}
      centered
      open={visible}
      onOk={onOk}
      onCancel={onCancel}
      maskClosable={false}
      {...config.modalProps}
    >
      {contentText}
    </Modal>
  );

  const modalByType = () => {
    // Modal[`${type}`]({
    //   title: config.title,
    //   content: contentText,
    //   open: visible,
    //   centered: true,
    //   onOk: onOk,
    //   onCancel: onCancel,
    //   ...config.modalProps
    // });
  };
  return {
    showModal,
    modal,
    modalByType,
    visible,
    setVisible
  };
};

export default useModal;
