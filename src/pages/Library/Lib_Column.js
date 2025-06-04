import React from 'react';
import { FcDocument } from "react-icons/fc";
import { GoFileDirectoryFill } from "react-icons/go";
import { TbDeviceIpadQuestion } from "react-icons/tb";

const LibColumn = ({ docName, docTitle, type }) => {
  let icon;
  if (type === 'doc') {
    icon = <FcDocument />;
  } else if (type === 'course') {
    icon = <GoFileDirectoryFill color='green' />;
  } else if (type === 'question') {
    icon = <TbDeviceIpadQuestion  color='light-pink'/>;
  }

  return (
    <div className="lib-column">
      <p className="document-icon">{icon}</p>
      <p>{docName}</p> 
      <p className='sub-heading'>{docTitle}</p> 
    </div>
  );
}

export default LibColumn;
