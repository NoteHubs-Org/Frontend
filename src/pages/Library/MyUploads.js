import React from 'react'
import LibColumn from './Lib_Column';

const MyUploads = () => {
  return (
    <div className='library-containers'> 
      <h2>My Uploads</h2>
      <div className="user-uploads">
        <LibColumn docName={'Document 1'} docTitle={"document one"} type={"doc"} />
        <LibColumn docName={'Document 2'} docTitle={"document two"} type={"doc"} />
        <LibColumn docName={'Document 3'} docTitle={"document three"} type={"doc"}/>
      </div>
    </div>
  )
}

export default MyUploads