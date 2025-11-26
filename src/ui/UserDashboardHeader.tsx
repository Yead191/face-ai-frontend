import React from 'react'
import Link from 'next/link';

const UserDashboardHeader = () => {
    return (
        <div className='flex items-center gap-x-7 justify-end'>


            <Link href="/profile" className='flex  items-center gap-x-3'>
                <img
                    style={{
                        clipPath: "circle()",
                        width: 48,
                        height: 48,
                    }}
                    // src={profile?.data?.profile?.startsWith("https") ? profile?.data?.profile : `${imageUrl}${profile?.data?.profile}`} 
                    src="https://i.pinimg.com/736x/7b/05/51/7b0551406cd7936252123558aacc9191.jpg"
                    alt="person-male--v2"
                    className='clip'
                />
                <div className=' flex flex-col gap-y-0.5'>
                    <p className=' text-[16px] font-medium'> John Smith</p>
                    <p className=' text-[14px] font-medium'>Fardin@gmail.com</p>
                </div>

            </Link>
        </div>
    )
}

export default UserDashboardHeader