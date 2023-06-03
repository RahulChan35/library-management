import React from 'react'
import Loading from './Loading'
import { useState, useEffect } from 'react'

const AllBooks = () => {
  const [books, setBooks] = useState([])
  const [filteredBooks, setFilteredBooks] = useState([])
  const [filterBy, setFilterBy] = useState('Filter by Author')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8000/ArtsandMusic')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Biography')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Business')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Comic')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Cooking')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Entertainment')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/HealthandFitness')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/History')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Horror')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Kids')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Medical')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })

    fetch('http://localhost:8000/Sports')
      .then((response) => response.json())
      .then((data) => {
        setBooks((prev) => [...prev, ...data])
      })
  }, [])

  const handleChange = (e) => {
    setText(e.target.value)

    if (filterBy === 'Filter by Author') {
      setFilteredBooks(books.filter((book) => book.author.includes(text)))
    } else {
      setFilteredBooks(books.filter((book) => book.title.includes(text)))
    }
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="filter books...."
        className="text-filter"
        value={text}
        onChange={handleChange}
      />
      <select onChange={(e) => setFilterBy(e.target.value)}>
        <option value="Filter by Author">Filter by Author</option>
        <option value="Filter by Title">Filter by Title</option>
      </select>
      <div className="row">
        {books.length > 0 && text === ''
          ? books.map((book, index) => {
              return (
                <div className="book container allbooks col-md-3" key={index}>
                  <div className="left">
                    <img src={book.img} alt="rygre" />
                  </div>
                  <div className="right">
                    <h1 className="title">{book.title}</h1>
                    <p className="author">{book.author}</p>
                    <p className="desc">{book.desc}</p>
                    <h1 className="rating">Rating: {book.rating}</h1>
                    <button className="btn btn-primary">
                      Add to Catalogue
                    </button>
                  </div>
                </div>
              )
            })
          : filteredBooks.map((book, index) => {
              return (
                <div className="book container allbooks col-md-3" key={index}>
                  <div className="left">
                    <img src={book.img} alt="etrfed" />
                  </div>
                  <div className="right">
                    <h1 className="title">{book.title}</h1>
                    <p className="author">{book.author}</p>
                    <p className="desc">{book.desc}</p>
                    <h1 className="rating">Rating: {book.rating}</h1>
                    <button className="btn btn-primary">
                      Add to Catalogue
                    </button>
                  </div>
                </div>
              )
            })}
      </div>
      {loading && <Loading />}
    </div>
  )
}

export default AllBooks
