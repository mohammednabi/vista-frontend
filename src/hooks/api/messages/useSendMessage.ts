import { makePostRequestWithoutToken } from "@/api/makePostRequestWithoutToken";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useSendMessage = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async (formData) => {
      return await makePostRequestWithoutToken(formData, `/api/messages`);
    },
    mutationKey: ["createMessage"],
    onSuccess: () => {
      toast.success("Success Sending Message");
      queryClient.invalidateQueries();
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error || "Failed Sending Messages");
    },
  });

  return mutation;
};

export default useSendMessage;
