"use client";

import AuthProvider from "./Provider/AuthProvider";

const Providers = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default Providers;
