import React from "react";

const CommentBox = ({image,comment,person}) => {
  return (
    <div className="bg-white flex flex-col w-96 items-start justify-center gap-5 py-10 rounded-2xl p-10 relative snap-start shadow-lg">
        <div>
            <img src={image} />
        </div>
        <div className="flex flex-wrap">
            <p>{comment}</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
            <img src={person} />
            <div className="flex flex-col">
                <h1>John Hellena</h1>
                <p>CEO, Company</p>
            </div>
        </div>
    </div>
  );
}

export default CommentBox;