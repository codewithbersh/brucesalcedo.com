import { useSendMessage } from "@/hooks/use-send-message";

import { DialogModal } from "./dialog-modal";

export const SendMessageModal = () => {
  const { isOpen, setIsOpen } = useSendMessage();

  return (
    <DialogModal isOpen={isOpen} setIsOpen={setIsOpen}>
      hello
    </DialogModal>
  );
};
