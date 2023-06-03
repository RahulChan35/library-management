import React from 'react'
import { useState, useEffect } from 'react'

const Body = () => {
  const [Category, setCategory] = useState([{}])
  const [isFetched, setIsFetched] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8000/Category')
      .then((response) => response.json())
      .then((data) => {
        setIsFetched(true)
        console.log(data)
        setCategory(data)
      })
  }, [])
  return (
    <div className="container">
      <h2 style={{ color: '#008575' }} className="allcategories">
        All Categories
      </h2>
      <div className="underline"></div>
      <div className="row">
        {isFetched ? (
          Category.map((category) => {
            const subtitles = []
            for (var i = 0; i < 4; i++) {
              subtitles.push(
                <a href="/substitle">
                  <li>{category.subtitles[i]}</li>
                </a>,
              )
            }
            return (
              <div className="col-md-3">
                <div className="card text-center">
                  <div className="card-header">
                    {category.title.slice(1, category.title.length)}
                  </div>
                  <div className="card-body">{subtitles}</div>
                  <div className="card-footer text-muted">
                    <a href={category.title}>See All...</a>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <h1>Loading...</h1>
        )}
      </div>
    </div>
  )
}

export default Body
