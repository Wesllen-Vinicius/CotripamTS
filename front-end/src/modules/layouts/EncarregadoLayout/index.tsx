import React, { ReactNode } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBarEncarregado from './AppBarEncarregado';
import withRoot from '../../withRoot';
import CardPerfilUsuario from '../../components/CardPerfilUsuario';
type layoutProps = {
  children: ReactNode
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4, 4),
    margin: theme.spacing(2, 2),
    width: '100%',
  },
  card: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid black',
    borderRadius: '5px',
    textAlign: 'center',
  },
}));




function EncarregadoLayout({ children }: layoutProps) {
  const classes = useStyles()
  return (
    <Container component="section" maxWidth="lg" className={classes.root}>
      <AppBarEncarregado />
    <Grid container spacing={2} >
      <Grid item xs={12} sm={4}>
      <CardPerfilUsuario/>
        </Grid>
        <Grid item xs={12} sm={4}>
        {children}
        </Grid>
        <Grid item xs={12} sm={4}>
        {children}
        </Grid>
      </Grid>
      </Container>
  )
}
export default withRoot(EncarregadoLayout)