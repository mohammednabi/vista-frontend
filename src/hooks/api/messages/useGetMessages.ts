import { makeGetRequestWithoutToken } from "@/api/makeGetRequestWithoutToken";
import { useQuery } from "@tanstack/react-query";

const useGetMessages = () => {
  const query = useQuery({
    queryKey: ["messages"],
    queryFn: async () => {
      return await makeGetRequestWithoutToken(`/api/messages`);
    },
  });

  return query;
};

export default useGetMessages;
