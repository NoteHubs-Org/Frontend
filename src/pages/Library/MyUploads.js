import React from 'react'
import Lib_Column from './Lib_Column';

const MyUploads = () => {
  return (
    <div className='library-containers'> 
      <h2>My Uploads</h2>
      <div className="user-uploads">
        <Lib_Column docName={'Document 1'} docTitle={"document one"} type={"doc"} />
        <Lib_Column docName={'Document 2'} docTitle={"document two"} type={"doc"} />
        <Lib_Column docName={'Document 3'} docTitle={"document three"} type={"doc"}/>
      </div>
    </div>
  )
}

export default MyUploads