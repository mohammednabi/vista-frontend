import { Toaster } from "./components/ui/sonner";
import AppRoutes from "./routes/AppRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { io } from "socket.io-client";

import FakeMessagesComponent from "./components/FakeMessageComponent";

const queryClient = new QueryClient();
const socket = io(import.meta.env.VITE_SERVER_API);

function App() {
  socket.on("connect", () => {
    console.log("is socket connected ?:", socket.connected);
  });

  // const notificationsEventSource = new EventSource(
  //   `${import.meta.env.VITE_SERVER_API}/notifications`
  // );

  // notificationsEventSource.onmessage = (e) => {
  //   console.log("notificaiton :", e.data);
  // };

  // notificationsEventSource.onerror = (e) => {
  //   console.log("notificaiton Error :", e);
  // };

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {/* <FakeMessagesComponent socket={socket} /> */}
        <AppRoutes />
        <Toaster />
      </QueryClientProvider>
    </>
  );
}

export default App;
