import type { z } from 'zod';
import { productSchme } from '@/lib/schema'
import React from 'react'


export function ProductListThumbnail({
    product,
}: {
    product: z.infer<typeof productSchme>
}) {
  return (
    <div>product-list-thumbnail</div>
  )
}

export function ProductListThumbnailSkeleton(){
    return (
        <div className='bg-background'>
            <div className='ring-border relative aspect-square overflow-hidden rounded-xl ring-1'>
                <div  />
            </div>
            <div className=''>

            </div>
        </div>
    )
}
