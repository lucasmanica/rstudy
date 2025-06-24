import React from 'react';
import Header from './Header';
import HomeSection from './HomeSection';
import ProdutoSection from './ProdutoSection';
function AppChallenge() {
  const { pathname } = window.location;
  let Component;
  if (pathname.includes('produto')) {
    Component = ProdutoSection;
  } else {
    Component = HomeSection;
  }
  return (
    <div>
      AppChallenge
      <section>
        <Header></Header>
        <Component></Component>
      </section>
    </div>
  );
}

export default AppChallenge;
