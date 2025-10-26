import { makePostRequestWithoutToken } from "@/api/makePostRequestWithoutToken";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

const useSignup = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      return await makePostRequestWithoutToken(formData, `/api/auth/signup`);
    },
    mutationKey: ["signup"],
    onSuccess: (successData: any) => {
      toast.success("Success Signup");

      navigate("/login");
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.error || "Failed Signup");
    },
  });

  return mutation;
};

export default useSignup;
