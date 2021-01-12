import React from 'react';

const Definition = (props) => {
   const { definition, example, synonyms, setQuery, clearErr } = props;
   return (
      <div className={'definition'}>
         <p>Definition: {definition}</p>
         <p>Example: {example}</p>
         {synonyms?.length > 0 ? (
            <div>
               <h3>Synonyms</h3>
               <div className={'synonymsParent'}>
                  {synonyms.map((synonym, idx) => {
                     const fireQuery = () => {
                        setQuery(synonym);
                        clearErr();
                     };
                     return (
                        <p className={'synonym'} key={idx} onClick={fireQuery}>
                           {synonym}
                        </p>
                     );
                  })}
               </div>
            </div>
         ) : null}
      </div>
   );
};

export default Definition;
