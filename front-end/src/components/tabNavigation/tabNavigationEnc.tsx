import React from "react"
import { render } from "react-dom"
import styled from "styled-components"
import { Tabs, TabList, Tab, TabPanel } from "react-tabs"
import FormSerosa from "../form/form-serosa"
import FormAbate from "../form/form-abate-diario"
import FormTripaCozida from "../form/form-tripa-cozida"
import FormProdutos from "../form/form-produtos"

const STabs = styled(Tabs)`
  font-size: 12px;
  width: 100%;
  height: 90%;
`

const STabList = styled(TabList)`
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0;
`

const STab = styled(Tab)`
  margin-right: 4px;
  padding: 4px;
  user-select: none;
  cursor: pointer;
  &.is-selected {
    // color: white;
    // background: black;
    border-bottom: 1px solid white;
  }
`

const STabPanel = styled(TabPanel)`
  display: none;
  min-height: 40vh;
  border: 1px solid black;
  padding: 4px;
  margin-top: -5px;
  &.is-selected {
    display: block;
  }
`

const StyledCard = styled.form`
  width: 95%;
  height: 90%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
`

export function TabNavigationEnc() {
  return (
    <StyledCard>
      <STabs
        selectedTabClassName="is-selected"
        selectedTabPanelClassName="is-selected"
      >
        <STabList>
          <STab>Abate</STab>
          <STab>Serosa</STab>
          <STab>Tripa Cozida</STab>
          <STab>Produtos</STab>
        </STabList>
        <STabPanel>
          <FormAbate />
        </STabPanel>
        <STabPanel>
          <FormSerosa />
        </STabPanel>
        <STabPanel>
          <FormTripaCozida />
        </STabPanel>
        <STabPanel>
          <FormProdutos />
        </STabPanel>
      </STabs>
    </StyledCard>
  )
}
