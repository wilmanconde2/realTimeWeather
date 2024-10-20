import { useEffect } from 'react';

const useTitulo = (textoTitulo = 'Sin titulo') => {
  useEffect(() => {
    document.title = `Real Time Weather - ${textoTitulo}`;
  }, []);
};

export default useTitulo;
