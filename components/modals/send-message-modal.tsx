"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSendMessage } from "@/hooks/use-send-message";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

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
  email: z.string().email("Invalid email."),
  body: z.string().min(1, "Message too short.").max(512, "Message too long."),
});

type FormData = z.infer<typeof formSchema>;

export const SendMessageModal = () => {
  const [error, setError] = useState<boolean>(false);
  const { isOpen, setIsOpen } = useSendMessage();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      body: "",
    },
  });

  const onSubmit = async (values: FormData) => {
    try {
      await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify(values),
      });
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  const isLoading = form.formState.isSubmitting;

  return (
    <DialogModal isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="font-medium">Send message</h1>

          <div className="hidden items-center sm:flex">
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
                    <Input
                      placeholder="Your email"
                      {...field}
                      disabled={isLoading}
                    />
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
                      disabled={isLoading}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {form.formState.isSubmitted ? (
              <div
                style={{
                  animationFillMode: "forwards",
                  animationDelay: `0.15s`,
                }}
                className={cn(
                  "mt-2 flex h-8 animate-fade-up items-center justify-center  gap-2 text-center text-sm text-muted-foreground opacity-0",
                  error && "text-destructive dark:text-red-400",
                )}
              >
                <span>{error ? "An error has occured." : "Message sent."}</span>
                <span
                  onClick={() => {
                    form.reset();
                    setError(false);
                  }}
                  className="cursor-pointer text-primary hover:underline"
                >
                  Reset
                </span>
              </div>
            ) : (
              <Button type="submit" className="mt-2">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Sending
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" /> Send
                  </>
                )}
              </Button>
            )}
          </form>
        </Form>
      </div>
    </DialogModal>
  );
};
