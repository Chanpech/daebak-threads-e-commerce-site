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

/**
 * Utlized shimmer animation by using animate-pulse from Tailwind CSS
 * @returns the skeleton loader for basic loading states
 */
export function ProductListThumbnailSkeleton(){
    return (
        <div className='bg-background'>
            <div className='ring-border relative aspect-square overflow-hidden rounded-xl ring-1'>
                <div  className='bg-muted size-full animate-pulse'/>
            </div>
            <div className='flex items-center gap-2 py-2'>
                <div className='flex flex-col gap-1'>
                    <div className='bg-muted h-4 w-3/4 animate-pulse rounded-md'/>
                    <div className='bg-muted h-4 w-1/2 animate-pulse rounded-md'/>
                </div>
                <div className='ml-auto'>
                    <div className='bg-muted h-10 w-20 animate-pulse rounded-md'/>
                </div>
            </div>
        </div>
    )
}
