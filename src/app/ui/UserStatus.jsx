import { MdOutlineCancel } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

export default function UserStatus({ status }) {
    const statusColor = status === 'Active' ? 'text-green-500' : 'text-red-500';

    return (
        <>
        
      <div className="flex items-center gap-1">
        {status === 'Active' ? (
          <CiCircleCheck className={`h-5 w-5 ${statusColor}`} />
        ) : (
          <MdOutlineCancel className={`h-5 w-5 ${statusColor}`} />
        )}
        <span className={`text-sm font-medium ${statusColor}`}>{status}</span>
      </div>
        </>
    );
  }