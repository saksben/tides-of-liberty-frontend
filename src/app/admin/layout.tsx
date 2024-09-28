import Link from "next/link";

const AdminLayout = ({ children }) => {
  return (
    <div className='p-4 w-full'>
      <h1 className='text-2xl text-center'>Admin Dashboard</h1>
      <nav className='w-full flex gap-10'>
        <Link href="/admin/collections" className='p-2 bg-blue-500 rounded text-white'>Manage Collections</Link>
        {/* <Link href="/admin/products">Manage Products</Link> */}
      </nav>
      {children}
    </div>
  );
};

export default AdminLayout;
