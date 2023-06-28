const commonLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/services",
    title: "Services",
  },
  {
    path: "/pricing",
    title: "Pricing",
  },
  {
    path: "/cars",
    title: "Cars",
  },
  {
    path: "/blog",
    title: "Blog",
  },
  {
    path: "/contact",
    title: "Contact",
  },
];

export const afterLogin = [
  ...commonLinks,
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];
export const beforeLogin = [
  ...commonLinks,
  {
    path: "/login",
    title: "Login",
  },
];
