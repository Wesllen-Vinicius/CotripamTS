import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import ButtonBase from "@mui/material/ButtonBase"
import Container from "@mui/material/Container"
import Typography from "../components/homeComponents/Typography"

const ImageBackdrop = styled("div")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: "#000",
  opacity: 0.5,
  transition: theme.transitions.create("opacity"),
}))

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  display: "block",
  padding: 0,
  borderRadius: 0,
  height: "40vh",
  [theme.breakpoints.down("md")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover": {
    zIndex: 1,
  },
  "&:hover .imageBackdrop": {
    opacity: 0.15,
  },
  "&:hover .imageMarked": {
    opacity: 0,
  },
  "&:hover .imageTitle": {
    border: "4px solid currentColor",
  },
  "& .imageTitle": {
    position: "relative",
    padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
  },
  "& .imageMarked": {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
}))

const images = [
  {
    url: "https://media-exp1.licdn.com/dms/image/C4D22AQGJM_9PPzOROQ/feedshare-shrink_800/0/1593535089023?e=1654732800&v=beta&t=sQ7Hy4ONFWt8h7tJineZArsQiQrk-mJYsVtOX7cnoaY",
    title: "Parceiros",
    width: "30%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=z8bt8njmp",
    title: "Kit Panelada",
    width: "20%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=y7ep5xxtt",
    title: "Nossa Equipe de Gerencia",
    width: "50%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=2pk626tyg",
    title: "Tripa Grossa",
    width: "38%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=gvceckuk9",
    title: "Nossa Produção",
    width: "38%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=vwfb5y49m",
    title: "Nossas Instalações",
    width: "24%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=fjr5qdyy6",
    title: "Mocotó",
    width: "40%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=n88uff6x9",
    title: "Nossa Historia",
    width: "20%",
  },
  {
    url: "https://files.fm/thumb_show.php?i=yv8uqt8wb",
    title: "Colaboradores",
    width: "40%",
  },
]

export default function ProductCategories() {
  return (
    <Container component="section" sx={{ mt: 8, mb: 4 }}>
      <Typography variant="h4" marked="center" align="center" component="h2">
        Um pouco de Nós! 
      </Typography>
      <Box sx={{ mt: 8, display: "flex", flexWrap: "wrap" }}>
        {images.map((image) => (
          <ImageIconButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundSize: "cover",
                backgroundPosition: "center 40%",
                backgroundImage: `url(${image.url})`,
              }}
            />
            <ImageBackdrop className="imageBackdrop" />
            <Box
              sx={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "common.white",
              }}
            >
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className="imageTitle"
              >
                {image.title}
                <div className="imageMarked" />
              </Typography>
            </Box>
          </ImageIconButton>
        ))}
      </Box>
    </Container>
  )
}
