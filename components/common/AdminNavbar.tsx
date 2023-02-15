import React from "react";
import Link from "next/link";

const AdminNavbar = () => {
  return (
    <div className="navbar bg-red-500 fixed">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Admin</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/admin">Dashboard</Link>
          </li>
          <li>
            <Link href="/admin/users">Users</Link>
          </li>
          <li>
            <Link href="/">Back to Website</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default AdminNavbar;