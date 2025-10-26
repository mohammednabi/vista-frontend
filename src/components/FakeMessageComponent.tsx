import useGetMessages from "@/hooks/api/messages/useGetMessages";
import useSendMessage from "@/hooks/api/messages/useSendMessage";
import React from "react";
import { useForm, type FieldValues } from "react-hook-form";
import type { Socket } from "socket.io-client";

interface FakeMessagesComponentProps {
  socket: Socket;
}

const FakeMessagesComponent: React.FC<FakeMessagesComponentProps> = ({
  socket,
}) => {
  const { mutate } = useSendMessage();
  const { data, refetch } = useGetMessages();
  const { register, handleSubmit, resetField } = useForm({
    defaultValues: {
      message: "",
    },
  });

  const submitForm = (formData: FieldValues) => {
    resetField("message");
    mutate(formData as any, {});
  };

  socket.on("messages", (data) => {
    if (data.action === "create") {
      refetch();
    }
  });

  return (
    <>
      <div>
        <div>messages:</div>
        <div className="flex flex-col gap-1">
          {data?.messages?.map((item: string, index: number) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <form
          onSubmit={handleSubmit(submitForm)}
          className="flex flex-col gap-2 w-1/4 m-5"
        >
          <input
            {...register("message")}
            className="p-5 bg-stone-600 text-white"
          />
          <button className="p-5 cursor-pointer bg-black text-white">
            send
          </button>
        </form>
      </div>
    </>
  );
};

export default FakeMessagesComponent;
