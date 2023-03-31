import React from 'react';
import TabPanel from 'devextreme-react/tab-panel';

import { multiViewItems as companies } from './data.js';
import CompanyItem from '../OverviewTab/CompanyItem';
import axios from "axios";

class TabsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      // animationEnabled: true,
      // swipeEnabled: true,
      // loop: false,
      selectedIndex: 3,
    };
    this.onSelectionChanged = this.onSelectionChanged.bind(this);
  }

  render() {

  const url = "https://pokeapi.co/api/v2/pokemon/1";
    axios.get(url).then(response => {
    console.log(response.data);
  });

    const {
      animationEnabled, loop, selectedIndex, swipeEnabled,
    } = this.state;
    return (
      <div>
        <TabPanel
          height={800}
          dataSource={companies}
          selectedIndex={selectedIndex}
          onOptionChanged={this.onSelectionChanged}
          loop={loop}
          itemTitleRender={this.itemTitleRender}
          itemComponent={CompanyItem}
          animationEnabled={animationEnabled}
          swipeEnabled={swipeEnabled}
        />
      </div>
    );
  }

  itemTitleRender(company) {
    return (
    <span>{company.CompanyName}</span>
    );
  }

  onSelectionChanged(args) {
    if (args.name === 'selectedIndex') {
      this.setState({
        selectedIndex: alert,
      });
    }
  }
}

export default TabsComponent;
