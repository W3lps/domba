import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

interface InputInstituicaoCard {
  id: string;
  nome: string;
  imagem: string;
  instituicao_tipo_id: string;
}

function InstituicaoCard({
  id,
  nome,
  imagem,
  instituicao_tipo_id,
}: InputInstituicaoCard) {
  return (
    <Card sx={{ width: 350, height: 300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imagem}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nome}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InstituicaoCard;
