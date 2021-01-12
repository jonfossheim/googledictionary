import React from 'react';
import Definition from './Definition';

const Meaning = (props) => {
   const { partOfSpeech, definitions } = props;
   return (
      <div>
         <h2>{partOfSpeech}</h2>
         <>
            {definitions.map((definition, idx) => (
               <Definition key={idx} {...definition} />
            ))}
         </>
      </div>
   );
};

export default Meaning;
