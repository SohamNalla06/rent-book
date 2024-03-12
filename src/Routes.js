const Routes = [
  {
    element: <app />,
    path: "/",
    title: "Home",
    children: [
      {
        element: <login />,
        path: "/login",
        title: "Home",
      },
    ],
  },
];
export default Routes;
