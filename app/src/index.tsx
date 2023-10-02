import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Root from "./routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import DatePickerPage from "./routes/datePickerPage";
import RichTextEditorPage from "./routes/richTextEditorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "date-picker",
        element: <DatePickerPage />,
      },
      {
        path: "rt-editor",
        element: <RichTextEditorPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
