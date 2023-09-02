import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleReadMore = () => {
    setIsTruncated(!isTruncated);
  };

  const displayText = isTruncated ? text.slice(0, maxLength) : text;

  return (
    <div>
      <p dangerouslySetInnerHTML={{ __html: displayText }}/>
      {text.length > maxLength && (
        <button onClick={toggleReadMore} className='btn btn-danger read-more-btn'>
          {isTruncated ? 'Read more' : 'Read less'}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
