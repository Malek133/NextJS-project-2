"use client";
// import { CommentWithUser } from '@/utils/types';

// import UpdateCommentModal from './UpdateCommentModal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
// import axios from 'axios';
// import { DOMAIN } from '@/utils/constants';
import { toast } from 'react-toastify';
import { Pencil,Trash2 } from 'lucide-react';


// interface CommentItemProps {
//  comment: CommentWithUser;
//   userId: number | undefined;
// }

const CommentItem = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const commentDeleteHandler = async () => {
    try {
      if(confirm("you want delete this comment, Are you sure?")) {
        // await axios.delete(`${DOMAIN}/api/comments/${comment.id}`);
        router.refresh();
      }
    } catch (error:any) {
      toast.error(error?.response?.data.message);
      console.log(error);
    }
  }

  return (
    <div className='mb-5 rounded-lg p-3 bg-gray-200 border-2 border-gray-300'>
       <div className='flex items-center justify-between mb-2'>
          <strong className='text-gray-800 uppercase'>
            {/* {comment.user.username} */}
            Alphazero
          </strong>
          <span className='bg-red-500 px-1 rounded-lg text-white'>
            {/* {new Date(comment.createdAt).toDateString()} */}
            1/1/2024
          </span>
       </div>
       <p className='text-gray-800 mb-2'>
        {/* {comment.text} */}
        This is a very nice place! I would
       </p>
       {/* {userId && userId === comment.userId && ( */}
        <div className='flex justify-end items-center'>
         <Pencil onClick={() => setOpen(true)} className='text-green-800 text-xl cursor-pointer me-3' />
         <Trash2 onClick={commentDeleteHandler} className='text-red-700 text-xl cursor-pointer' />
       </div>
       {/* )} */}

  

    </div>
  )
}

export default CommentItem