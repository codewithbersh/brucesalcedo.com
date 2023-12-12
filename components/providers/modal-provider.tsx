"use client";

import { useEffect, useState } from "react";

import { QuickActionsModal } from "@/components/modals/quick-actions-modal";
import { SendMessageModal } from "@/components/modals/send-message-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <>
      <QuickActionsModal />
      <SendMessageModal />
    </>
  );
};
