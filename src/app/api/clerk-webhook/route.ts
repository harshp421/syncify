import { db } from "@/lib/db";
import next from "next";
import { NextResponse } from "next/server";


export async function POST(req:Request){
  try{
 const body=await req.json();
 const {id,email_addresses,first_name,image_url}=body?.data;
     const email=email_addresses[0].email_address;
 console.log(email);
    await db.user.upsert({
        where:{clerkId:id},
        update:{
            email,
            name:first_name,
            profileImage:image_url
        },
        create:{
            clerkId:id,
            email,
            name:first_name || ' ',
            profileImage:image_url||''
        },
    
    })
    return new NextResponse('user Updated in Database Successfully',{
        status:200
    
    })
  }catch(error)
  {
    return new NextResponse('Error in Updating User in Database',{
        status:500
    })
  }
}