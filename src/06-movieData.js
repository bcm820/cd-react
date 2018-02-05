import React from 'react'
import axios from 'axios'

class MovieData extends React.Component {

  state = {
    movie: '',
    results: [],
    err: null
  }

  search = () => {
    axios.get(`http://www.omdbapi.com/?apikey=7ad03c78&s=${this.state.movie}`)
    .then(res => {
      res.data.Response === 'True'
      ? this.setState({results: res.data.Search})
      : this.setState({results: res.data.Error})
    })
  }

  render() {
    return <div style={{textAlign: 'center'}}>
      <h1>Movie Data</h1>
      <input
        onChange={event => this.setState({movie: event.target.value})}
        onKeyPress={event => event.key === 'Enter' ? this.search() : false}
      />
      <button onClick={this.search}>Search</button>
      {
        Array.isArray(this.state.results)
        ? <div>
          {this.state.results.map(movie => {
            return (
              <div key={movie.imdbID}><br/>
                <img src={movie.Poster} alt={movie.Title}/>
                <h4>{movie.Title} ({movie.Year})</h4>
              </div>
            )
          })
        }
        </div>
        : <p>{this.state.results}</p>
      }
    </div>
  }
}

export default MovieData