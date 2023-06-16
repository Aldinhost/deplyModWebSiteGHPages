import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Improving end distrusts instantly',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore aspernatur neque quam nihil sit praesentium consectetur, velit natus deserunt voluptatibus quasi quo architecto odit enim ipsam consequatur! Maiores, deleniti.'
  },
  {
    title: 'Become the tended active',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore aspernatur neque quam nihil sit praesentium consectetur, velit natus deserunt voluptatibus quasi quo architecto odit enim ipsam consequatur! Maiores, deleniti.'
  },
  {
    title: 'Message or am nothing',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore aspernatur neque quam nihil sit praesentium consectetur, velit natus deserunt voluptatibus quasi quo architecto odit enim ipsam consequatur! Maiores, deleniti.'
  },
  {
    title: 'Really boy law country',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non inventore aspernatur neque quam nihil sit praesentium consectetur, velit natus deserunt voluptatibus quasi quo architecto odit enim ipsam consequatur! Maiores, deleniti.'
  }
];


function Features() {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className="gpt3__features-heading">
        <h1 className='gradient__text'>The Future is Now and You Just Need to Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) =>(
          <Feature title={item.title} text={item.text} key={item.title + index}/>
        ))}
      </div>
    </div>
  )
}

export default Features