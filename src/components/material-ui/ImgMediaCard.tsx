// https://material-ui.com/pt/components/cards/

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function ImgMediaCard(props:any) {
  const { coinImg, coinName, coinBalance, strLink } = props.props;
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={coinImg}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {coinName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Saldo: <strong>{coinBalance}</strong>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link href={strLink}>
          Ver Mais
        </Link>
      </CardActions>
    </Card>
  );
}