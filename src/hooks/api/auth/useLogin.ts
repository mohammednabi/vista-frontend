import { makePostRequestWithoutToken } from "@/api/makePostRequestWithoutToken";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

// type SuccessDataType = {
//     message:string,
//     token:string,
//     userId:string
// }

const useLogin = () => {
  const mutation = useMutation({
    mutationFn: async (formData) => {
      return await makePostRequestWithoutToken(formData, `/api/auth/login`);
    },
    mutationKey: ["login"],
    onSuccess: (successData: any) => {
      toast.success("Success Login");

      localStorage.setItem("access_token", successData?.token);
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error || "Failed Login");
    },
  });

  return mutation;
};

export default useLogin;
