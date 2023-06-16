import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

function Header() {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Let´s Build Something amazing with GPT-3 Open AI</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime aliquam explicabo odit ab sunt rerum at! Excepturi temporibus doloremque debitis voluptatum laudantium nesciunt quidem, soluta officiis omnis possimus alias amet.</p>
        <div className="gpt3__header-content_input">
          <input type="email" placeholder='Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people image" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai image" />
        </div>
    </div>
  )
}

export default Header