import * as React from "react"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import Typography from "../Typography"
import TextField from "../TextField"
import Button from "../Button"

function ProductCTA() {
  return (
    <Container component="section" sx={{ mt: 10, display: "flex" }}>
      <Grid container>
        <Grid item xs={12} md={12} sx={{ zIndex: 1 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              bgcolor: "rgb(34, 81, 130)",
              py: 8,
              px: 8,
            }}
          >
            <Box component="form" sx={{ maxWidth: 400 }}>
              <Typography
                variant="h2"
                component="h2"
                gutterBottom
                sx={{
                  color: "white",
                }}
              >
                Entre em Contato Conosco
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  color: "white",
                }}
              >
                Cliente ou Representante.
              </Typography>
              <TextField
                noBorder
                placeholder="Email"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />
              <TextField
                noBorder
                placeholder="Nome Completo/Razão Social"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />
              <TextField
                type="tel"
                noBorder
                placeholder="Contato"
                variant="standard"
                sx={{ width: "100%", mt: 3, mb: 2 }}
              />
              <Button
                type="submit"
                color="primary"
                variant="contained"
                sx={{ width: "100%" }}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { md: "block", xs: "none" }, position: "relative" }}
        >
          <Box
            sx={{
              position: "absolute",
              top: -67,
              left: -67,
              right: 0,
              bottom: 0,
              width: "100%",
              background:
                "url(/static/themes/onepirate/productCTAImageDots.png)",
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default ProductCTA
