import Image from 'next/image'
import React from 'react'




// shoe types
interface shoeTypes {
    shoeName: string,
    shoePrice: number,
    shoeImageURL: string
  }

export default function ShoeCard(shoe: shoeTypes) {
  return (
    <div className='flex items-center justify-center p-2 mx-1 bg-button-background-color rounded-md shadow-lg'>
      {/* shoe-image */}
      <div className='flex items-center justify-center'>
        <Image src={shoe.shoeImageURL} alt='mini-shoe' width={120} height={24} className='object-contain'/>
        <hr className='rotate-90 w-12'/>
      </div>
      <div>
        <h1>{shoe.shoeName}</h1>
        <h1>${shoe.shoePrice}</h1>
      </div>
    </div>
  )
}
