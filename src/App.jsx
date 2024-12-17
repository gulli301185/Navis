import { RouterProvider } from "react-router";
import { routes } from "./routes";

function App() {
  return (
    <>
      <div className="">
        <RouterProvider router={routes} />
      </div>
    </>
  );
}

export default App;
