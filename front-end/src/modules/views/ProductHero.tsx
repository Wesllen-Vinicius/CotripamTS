import Typography from "../components/Typography"
import ProductHeroLayout from "./ProductHeroLayout"

const backgroundImage =
  "https://files.fm/thumb_show.php?i=3d5c8q2x7"

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9",
        backgroundPosition: "center",
      }}
    >   
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Conheça nossos Alimentos com garantia SIF de qualidade.
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      ></Typography>
    </ProductHeroLayout>
  )
}
