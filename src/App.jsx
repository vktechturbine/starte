import { useState } from 'react';

import questions from './data';

const App = () => {
  const[value,setValue] = useState(null);
  const[value1,setValue2] = useState('add'); 

 
  let Visible = (id) => {
    questions.map((question) => {
      
        if(question.id == id)
        {
          if(value1 == 'add')
          {
        
          setValue(id);
          setValue2('minus');
          console.log(value1);
          }
        
          else
          {
                
              setValue(null);
              setValue2('add');
              console.log(value1);
            }
          
      }
    
    })
  }

  return(

    <div className ='main'>
      <div className='container'>
        <h1>Questions</h1>
        {questions.map((question) => {
          let{id,title,info} = question;
          return(
            <div key={id} className='question' >
              <div className='header'>
                <h5>{title}
                  <img   className='question-btn' style={{float:'right'}} onClick={() => Visible(id) } src={`./src/assets/${id === value ? 'minus' : 'add'}.png`} alt="" />
                </h5>
                {(value == id ) ? <p>{info}</p>: ''}
               
              </div>
                
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
