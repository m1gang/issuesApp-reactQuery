import React from 'react'
import { FiRefreshCcw } from 'react-icons/fi'

export const LoaderSpinner = () => {
    return (
        <div className='loading'>
            <div className='animate-spin'>
                <FiRefreshCcw size={30} />
            </div>
        </div>
    )
}
