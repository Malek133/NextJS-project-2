
import AdminSidebar from "./AdminSidebar";
import type { Metadata } from 'next';

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'This is admin dashboard',
}

const AdminDashboardLayout = ({ children }: 
    AdminDashboardLayoutProps) => {
  return (
    <div className="overflow-height flex
    items-start justify-between overflow-hidden">

        <div className="overflow-height w-12 
        lg:w-1/5 bg-gray-700 text-white p-1 lg:p-5
        border-2 border-b-white">
          <AdminSidebar />
        </div>

        <div className="overflow-height w-full 
        lg:w-4/5 overflow-y-scroll">
          {children}
        </div>
    </div>
  )
}

export default AdminDashboardLayout;
