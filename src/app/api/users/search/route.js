import { NextResponse } from "next/server";
import User from "@/app/lib/models/User";

export async function GET(request) {
    const {searchParams}=new URL(request.url);
    const query = searchParams.get('query')||"";
    const filterUsers=User.filter((user)=>{
        return user.name.toLowerCase().includes(query.toLowerCase());
    })
    return NextResponse.json(filterUsers)
}