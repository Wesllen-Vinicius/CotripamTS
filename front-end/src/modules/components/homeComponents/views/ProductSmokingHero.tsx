import Container from "@mui/material/Container"
import Typography from "../Typography"

function ProductSmokingHero() {
  return (
    <Container
      component="section"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        my: 9,
      }}
    >
      <Typography variant="subtitle1" sx={{ my: 3 }}></Typography>
    </Container>
  )
}

export default ProductSmokingHero
