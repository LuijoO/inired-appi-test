import React from 'react';
import TabsComponent from '../../components/OverviewTab/TabsComponent';
import './home.scss';

export default function Home() {
  const newLocal = <h1>holaesto es na</h1>;
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Pokemons</h2>
      <TabsComponent>
        {newLocal}
      </TabsComponent>
    </React.Fragment>
)}
