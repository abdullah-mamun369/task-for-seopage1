import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ToDosList from "../pages/ToDosList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <ToDosList />
            }
        ]
    }
])

export default router;