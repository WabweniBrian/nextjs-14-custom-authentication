import React from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-auto max-w-6xl px-3 py-4">{children}</div>;
};

export default AdminLayout;
