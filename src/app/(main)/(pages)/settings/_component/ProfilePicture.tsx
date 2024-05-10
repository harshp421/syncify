'use client' // is needed only if you’re using React Server Components
import React from 'react'
import Uploadcare from './Uploadcare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { XIcon } from 'lucide-react'

type Props = {
  onDelete?: any
  userImage: string
  onUpload?: any
}

const ProfilePicture = ({ onUpload, onDelete, userImage }: Props) => {
  const router = useRouter();
  const onRemoveProfileImage = async () => {
    const responce = onDelete();
    if (responce) {
      router.refresh();
    }
  }
  console.log(typeof (userImage), "userImage");
  return (
    <>
      <div className="flex flex-col">
        <p className='text-lg text-white'>Profile Picture</p>
        <div className="flex h-[30vh] flex-col items-center justify-center">

          {
            userImage === " " ? (
              <>
                <Uploadcare onUpload={onUpload} />

              </>
            ) : <> 
            <div className='relative h-full w-2/12'>
              <Image 
             src={userImage}
             alt='profile image'
             fill
            />
              <Button
                onClick={onRemoveProfileImage}
                className='bg-transparent  mt-48 text-white/70 hover:bg-transparent hover:text-white'
              >
                <XIcon />remove Logo
              </Button>
            </div></>
          }

        </div>
      </div>
    </>
  )
}
export default ProfilePicture