import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: (
        <div className="flex items-center justify-center bg-neutral-700 text-white h-screen text-4xl">
          Page not found
        </div>
      ),
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "review",
          element: <ReviewPage />,
        },
        // Add other routes here
      ],
    },
  ],
  {
    basename: "/abdalla_port", // important!
  }
);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: (
//       <div className="flex items-center justify-center bg-neutral-700 text-white h-screen text-4xl">
//         Page not found
//       </div>
//     ),
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       // {
//       //   path: "about",
//       //   element: <AboutPage />,
//       // },
//     ],
//   },
// ],

// );

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
