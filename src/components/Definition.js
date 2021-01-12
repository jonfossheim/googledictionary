import React from 'react';

const Definition = (props) => {
   const { definition, example } = props;
   console.log(props);
   return (
      <>
         <p className={'paragraph'}>Definition: {definition}</p>
         <p>Example: {example}</p>
      </>
   );
};

export default Definition;
