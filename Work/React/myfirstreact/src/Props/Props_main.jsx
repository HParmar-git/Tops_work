import React from 'react'
import Func_props from './Func_props'
import Class_props from './Class_props'

function Props_main() {
  return (
   <div className='row'>
            <h1>Props with Function</h1>
            <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/daayra-et00464392-1789753691.jpg" title="Daayra" desc="Crime,Drama,Thriller" />
            <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vibe-et00506465-1789714259.jpg" title="VIBE" desc="Action,Comedy" />
            <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hanuman-ansh-et00507738-1787130927.jpg" title="Hanuman Ansh" desc="Biography,Devotional,Drama" />
            <Func_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mirzapur-the-movie-et00417686-1787817242.jpg" title="Mirzapur: The Movie" desc="Crime,Drama,Thriller" />

            <br />
            <hr />
            <br />

            <h1>Props with Class</h1>
            <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/daayra-et00464392-1789753691.jpg" title="Daayra" desc="Crime,Drama,Thriller" />
            <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vibe-et00506465-1789714259.jpg" title="VIBE" desc="Action,Comedy" />
            <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hanuman-ansh-et00507738-1787130927.jpg" title="Hanuman Ansh" desc="Biography,Devotional,Drama" />
            <Class_props img="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mirzapur-the-movie-et00417686-1787817242.jpg" title="Mirzapur: The Movie" desc="Crime,Drama,Thriller" />



        </div>
  )
}

export default Props_main