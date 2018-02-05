import React from 'react'
import axios from 'axios'

/*
  TicTacToe without peeking at FB's tutorial
  We out here to code, not copy pasta
  Of course, I'll check it out afterwards :)
*/

class MovieData extends React.Component {

  state = {
    movie: '',
    results: []
  }

  search = () => {
    axios.get(`http://www.omdbapi.com/?apikey=7ad03c78&s=${this.state.movie}`)
    .then(res => {
      console.log(res)
      this.setState({results: res.data.Search})
    })
    .catch(err => console.log(err))
  }

  render() {
    return <div style={{textAlign: 'center'}}>
      <h1>Movie Data</h1>
      <input
        onChange={event => this.setState({movie: event.target.value})}
        onKeyPress={event => event.key === 'Enter' ? this.search() : false}
      />
      <button onClick={this.search}>Search</button>
      <div>
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
    </div>
  }
}

export default MovieData