// src/components/TabSet.js
import React, { useState } from "react";
import { TabSetContainer, TabList, Tab, TabPanel } from "./TabSet.styles";

const TabSet = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <TabSetContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            isActive={index === activeTab}
            onClick={() => handleTabClick(index)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabList>
      <TabPanel>{tabs[activeTab].content}</TabPanel>
    </TabSetContainer>
  );
};

export default TabSet;
