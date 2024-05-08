
import Link from "next/link";
import { LayoutDashboard } from 'lucide-react';
import { KeyboardMusic } from 'lucide-react';
import { MessageCircle } from 'lucide-react';

const AdminSidebar = () => {
  return (
    <>
      <Link href="/admin" className="flex items-center text-lg lg:text-2xl font-semibold">
        <LayoutDashboard className="text-3xl me-1" />
        <span className="hidden lg:block">Dashboard</span>
      </Link>
      <ul className="mt-10 flex items-center justify-center flex-col lg:items-start">
        <Link className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition" 
        href="/admin/articles-table">
          <KeyboardMusic className="me-1" />
          <span className="hidden lg:block">Articles</span>
        </Link>
        <Link className="flex items-center text-xl mb-5 lg:border-b border-gray-300 hover:border-yellow-200 hover:text-yellow-200 transition" 
        href="/admin/comment">
          <MessageCircle className="me-1" />
          <span className="hidden lg:block">Comments</span>
        </Link>
      </ul>
    </>
  )
}

export default AdminSidebar;