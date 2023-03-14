import React from 'react'
function Pogination({changePage, page, pageCount}) {
  return (
    <div className='pogination'>
        <button className='prevBtn' onClick={()=> changePage('prev')}>
            Prev
        </button>
        <div>{page}/{pageCount}</div>
        <button className='nextBtn' onClick={()=> changePage('next')}>
            Next
        </button>
    </div>
  )
}

export default Pogination