import Canyonvideo from './../../Beautify/Canyonvideo.mp4'
import './Home.css'
const Home = () => {
  return (
    <div className="film">
      <video src={Canyonvideo} muted autoPlay loop type="video/mp4"></video>
      <span className="spanning">
        <div className="card">
          <h1>Search Your Holiday!</h1>
          <label htmlFor="city">Search Your Destination:</label>
          <br />
          <input
            type="text"
            placeholder="Enter the destination..."
            className="dest"
          >
          </input>
          <label htmlFor="Date">Select Your Date:</label>
          <br />
          <input type="date" placeholder="dd/mm/yyyy" className="dest"></input>
          <label htmlFor="city">Search your destination:</label>
          <br />
          <input
            type="text"
            placeholder="Enter the destination..."
            className="dest"
          ></input>
        </div>
      </span>
    </div>
  )
}
export default Home
