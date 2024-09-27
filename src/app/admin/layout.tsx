import Link from "next/link";

const AdminLayout = ({ children }) => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <nav>
        <Link href="/admin/collections">Manage Collections</Link>
        <Link href="/admin/products">Manage Products</Link>
      </nav>
      {children}
    </div>
  );
};

export default AdminLayout;
