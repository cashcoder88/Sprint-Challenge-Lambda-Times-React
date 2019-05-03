import React from 'react';
import Tab from './Tab';
import styled from 'styled-components';
import PropTypes from 'prop-types';


const TabsDiv = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
`;

const TopicsDiv = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;

`;

const TitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`

const Tabs = props => {
  return (
    <TabsDiv className='tabs'>
      <TopicsDiv className='topics'>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {props.tabs.map((tab, i) => <Tab key={i} tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab}  /> )}

      </TopicsDiv>
    </TabsDiv>
  );
};


 Tabs.propTypes = {
    tabs: PropTypes.arrayOf(PropTypes.string)
 }


export default Tabs;


        /* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props */

// Make sure to use PropTypes to validate your types!

/* 
.tabs .topics .title {
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
}
.tabs .topics .tab {
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
}
.tabs .topics .tab:hover {
  text-decoration: underline;
}
.tabs .topics .active-tab {
  background-color: #fff;
  color: #333;
  border: 2px solid #333;
} */