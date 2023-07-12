import React from 'react'

const CommentsList = ({ comments }) => {
  return (
    <>
    <h3 className='sm:text-2xl text-2xl font-bold my-6 text-gray-900'>
      Comments
    </h3>
    {comments.map((comments, index) => (
      <div key = {index} >
        <h4 className='text-xl font-bold'>{comments.username}</h4>
        <p className='mt-1 mb-4'>{comments.text}</p>
      </div>
    ))}
    </>
  )
}

export default CommentsList