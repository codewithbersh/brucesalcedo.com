"use client";

import { useForm } from "react-hook-form";
import { useSendMessage } from "@/hooks/use-send-message";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogModal } from "./dialog-modal";

const formSchema = z.object({
  email: z.string().email(),
  body: z.string().min(1).max(512),
});

type FormData = z.infer<typeof formSchema>;

export const SendMessageModal = () => {
  const { isOpen, setIsOpen } = useSendMessage();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      body: "",
    },
  });

  const onSubmit = (values: FormData) => {
    console.log(values);
  };

  return (
    <DialogModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium">Send message</h1>

          <div className="flex items-center">
            <span className="mr-2 text-sm text-muted-foreground">Exit</span>
            <span className="rounded border bg-neutral-100 px-1.5 py-1 text-[10px] font-medium dark:bg-neutral-900">
              ESC
            </span>
          </div>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="body"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Say hi or leave a feedback"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-2">
              <Send className="mr-2 h-4 w-4" /> Send
            </Button>
          </form>
        </Form>
      </div>
    </DialogModal>
  );
};
