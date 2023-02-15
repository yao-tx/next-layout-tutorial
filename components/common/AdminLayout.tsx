import React, { PropsWithChildren } from "react";
import AdminNavbar from "./AdminNavbar";

const AdminLayout = (props: PropsWithChildren) => {
  return (
    <>
      <AdminNavbar />
      <main className="h-screen flex flex-col items-center justify-center">{props.children}</main>
    </>
  );
};

export default AdminLayout;