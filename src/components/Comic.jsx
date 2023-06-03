import React from 'react'
import Loading from './Loading'
import { useState, useEffect } from 'react'

const Comic = () => {
  const [Comics, setComics] = useState([])
  const [loading, setLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    fetch('http://localhost:8000/Comic')
      .then((response) => response.json())
      .then((data) => {
        setComics((prev) => [...prev, ...data])
        setLoading(false)
      })
  }, [pageNumber])
  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >=
      document.documentElement.scrollHeight
    ) {
      setLoading(true)
      setPageNumber((prev) => prev + 1)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  return (
    <div onScroll={handleScroll}>
      <h1 className="category-name">Arts and Music</h1>
      <p className="arrow"></p>
      {Comics.length > 0 &&
        Comics.map((book, index) => {
          return (
            <div className="book container" key={index}>
              <div className="left">
                <img src={book.img} alt="etfge" />
              </div>
              <div className="right">
                <h1 className="title">{book.title}</h1>
                <p className="author">{book.author}</p>
                <p className="desc">{book.desc}</p>
                <h1 className="rating">Rating: {book.rating}</h1>
                <button className="btn btn-primary">Add to Catalogue</button>
              </div>
            </div>
          )
        })}
      {loading && <Loading />}
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Comic
