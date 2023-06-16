import { Feature } from '../../components';
import './whatGPT3.css';

function WhatGPT3() {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='wgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature title='What is GPT-3' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nostrum ipsum placeat maxime? Iure ratione eaque soluta labore incidunt. Eligendi deserunt consequuntur in laudantium magni, ab error animi fugiat nemo.' />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore the Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
      <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nostrum ipsum placeat maxime? Iure ratione eaque soluta labore incidunt. Eligendi deserunt consequuntur in laudantium magni, ab error animi fugiat nemo.'/>
      <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nostrum ipsum placeat maxime? Iure ratione eaque soluta labore incidunt. Eligendi deserunt consequuntur in laudantium magni, ab error animi fugiat nemo.'/>
      <Feature title='Chatbots' text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur nostrum ipsum placeat maxime? Iure ratione eaque soluta labore incidunt. Eligendi deserunt consequuntur in laudantium magni, ab error animi fugiat nemo.'/>
      </div>
    </div>
  )
}

export default WhatGPT3