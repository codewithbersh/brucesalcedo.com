"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";

interface DialogModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
}

const DialogModal = ({ isOpen, setIsOpen, children }: DialogModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export { DialogModal };
