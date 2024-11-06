import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ToDoList from "../pages/ToDoList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <ToDoList />
            }
        ]
    }
])

export default router;