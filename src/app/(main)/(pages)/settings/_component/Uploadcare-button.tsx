'use client' // is needed only if you’re using React Server Components
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks';
import { useRouter } from 'next/navigation';
LR.registerBlocks(LR);


type Props = {
    onUpload:(e:string)=>any
}

const Uploadcare = ({ onUpload }: Props) => {
    const router = useRouter();
    const ctxProviderRef = useRef<typeof LR.UploadCtxProvider.prototype & LR.UploadCtxProvider>(null);


    useEffect(() => {
        const handleUpload = async (e: any) => {
            const file = await onUpload(e.detail.cdnUrl);
            if (file) {
                router.refresh();
            }
        }
      ctxProviderRef.current?.addEventListener('file-upload-success', handleUpload);
    }, [])
    return (
        <div>
     <lr-config
        ctx-name="my-uploader"
        pubkey="36c4b6b1ebbc6ca95079"
      />
        <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src={`${process.env.NEXT_PUBLIC_UPLOAD_CARE_CSS_SRC}${LR.PACKAGE_VERSION}${process.env.NEXT_PUBLIC_UPLOAD_CARE_SRC_PACKAGE}`}
      />

      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
        </div>
    )
}

export default Uploadcare