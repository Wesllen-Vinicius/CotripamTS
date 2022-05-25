import * as React from "react"
import AppAppBar from "../../modules/views/AppAppBar"
import AppFooter from "../../modules/views/AppFooter"
import ProductCategories from "../../modules/views/ProductCategories"
import ProductCTA from "../../modules/views/ProductCTA"
import ProductHero from "../../modules/views/ProductHero"
import ProductHowItWorks from "../../modules/views/ProductHowItWorks"
import ProductSmokingHero from "../../modules/views/ProductSmokingHero"
import ProductValues from "../../modules/views/ProductValues"
import withRoot from "../../modules/withRoot"

function Home() {
  return (
    <React.Fragment>
      <AppAppBar />
      <ProductHero />
      <ProductValues />
      <ProductCategories />
      <ProductHowItWorks />
      <ProductCTA />
      <ProductSmokingHero />
      <AppFooter />
    </React.Fragment>
  )
}

export default withRoot(Home)
