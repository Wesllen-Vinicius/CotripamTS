import * as React from "react"
import AppAppBar from "../../modules/components/homeComponents/views/AppAppBar"
import AppFooter from "../../modules/components/homeComponents/views/AppFooter"
import ProductCategories from "../../modules/components/homeComponents/views/ProductCategories"
import ProductCTA from "../../modules/components/homeComponents/views/ProductCTA"
import ProductHero from "../../modules/components/homeComponents/views/ProductHero"
import ProductHowItWorks from "../../modules/components/homeComponents/views/ProductHowItWorks"
import ProductSmokingHero from "../../modules/components/homeComponents/views/ProductSmokingHero"
import ProductValues from "../../modules/components/homeComponents/views/ProductValues"
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
