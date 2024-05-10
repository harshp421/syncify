import ProfileForm from '@/components/forms/Profile-form'
import React from 'react'
import ProfilePicture from './_component/ProfilePicture'
import { currentUser } from '@clerk/nextjs/server'
import { db } from '@/lib/db'

type Props = {}

const page = async(props: Props) => {
  const authUser=await currentUser();
  if(!authUser) return null;

  const updateUserInfo=async(name:string)=>{
    'use server'
    const updateUser=await db.user.update({
      where:{clerkId:authUser.id},
      data:{
        name
      }
    })
    console.log(updateUser);
  return updateUser;
  }


  const user=await db.user.findUnique({where:{clerkId:authUser.id}})
 if(!user) return null;
  
  const removeProfileImage = async () => {
    'use server'
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: '',
      },
    })
    console.log(response);
    return response
  }

  const uploadProfileImage=async(image:string)=>{
    'use server'
    const response = await db.user.update({
      where: {
        clerkId: authUser.id,
      },
      data: {
        profileImage: image,
      },
    })
    return response;
  }
  return (
   <>
    <div className='flex flex-col gap-4 relative '>
    <h1 className='text-3xl sticky top-0 z-[10] p-5 bg-background/50 backdrop-blur-lg flex items-center border-b'>Settings</h1>
    
    <div  className='flex flex-col gap-10 p-6'>
    <div>
          <h2 className="text-2xl font-bold">User Profile</h2>
          <p className="text-base text-white/50">
            Add or update your information
          </p>
      </div>
        <ProfilePicture
        onDelete={removeProfileImage}
        userImage={user.profileImage || " "}
        onUpload={uploadProfileImage}
        ></ProfilePicture>
        <ProfileForm user={user}  onUpdate={updateUserInfo}/>
    </div>
    </div>
   </>
  )
}

export default page