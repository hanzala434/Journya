import { MdOutlineCancel } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";

export default function QueryStatus({ status }) {
    const statusColor = status === 'resolved' ? 'text-green-500' : 'text-yellow-500';

    return (
        <>
        
      <div className="flex items-center gap-1">
        {status === 'resolved' ? (
          <CiCircleCheck className={`h-5 w-5 ${statusColor}`} />
        ) : (
          <IoMdTime className={`h-5 w-5 ${statusColor}`} />
        )}
        <span className={`text-sm font-medium ${statusColor}`}>{status}</span>
      </div>
        </>
    );
  }