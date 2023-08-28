// SearchBar.js
import React, { useEffect } from 'react';

function Search() {
  useEffect(() => {
    // Carica il codice di incorporamento di Google CSE quando il componente viene montato
    const script = document.createElement('script');
    script.src = 'https://cse.google.com/cse?cx=931b9015c6eb942ca'; // Sostituisci con il tuo ID di CSE
    script.async = true;
    document.head.appendChild(script);

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <input type="search" className="gcse-searchbox form-control form-control-dark" placeholder="Search..." aria-label="Search" />
  );
}

export default Search;
