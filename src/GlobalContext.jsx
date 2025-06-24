import React from 'react';
// Utilize o GlobalContext do exemplo anterior para puxar os dados da API abaixo:
// https://ranekapi.origamid.dev/json/api/produto/
// assim que o usuário acessar o app
// coloque os dados da API no contexto global, dando acesso aos dados da mesma
// defina uma função chamada limparDados que é responsável por zerar os dados de produto
// e exponha essa função no contexto global
export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [product, setProduct] = React.useState(null);
  React.useEffect(() => {
    const doFetch = async () => {
      const response = await fetch(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
      const result = await response.json();
      console.log(result);
      setProduct(result);
    };
    doFetch();
  }, []);
  function cleanData() {
    setProduct(null);
  }
  return (
    <GlobalContext.Provider value={{ product, setProduct, cleanData }}>
      {children}
    </GlobalContext.Provider>
  );
};
