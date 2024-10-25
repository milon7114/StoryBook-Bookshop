import React from 'react'
import BookCard from './BookCard'

export const BookBoard = ({books}) => {
  return (
    <div>
      <BookCard books={books}/>
    </div>
  )
}
