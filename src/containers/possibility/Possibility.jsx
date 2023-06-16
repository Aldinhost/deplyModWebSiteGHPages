import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id='possibility'>
      <div className="gpt3__possibility-image">
        <img src={possibilityImage} alt="possibility"/>
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className='gradient__text'>The Possibilities are beyond your imagination</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus odio labore natus, excepturi nihil atque veniam consequuntur dolor sunt aut a adipisci sit, commodi fugit velit nisi. Laboriosam, architecto est.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  )
}

export default Possibility