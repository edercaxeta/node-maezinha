import express from 'express';
import cors from 'cors';

import { PrismaClient } from '@prisma/client';
import { convertHourStringToMinutes } from './utils/convert-hour-string-to-minutes';
import { convertMinutesToHourString } from './utils/convert-minutes-to-hour-string';

const app = express();

app.use(express.json());
app.use(cors());
/* Para delimitar o uso da api apenas para o domínio próprio:
origin: 'https://meudominio.com.br' */

const prisma = new PrismaClient({
  log:['query']
});

app.get('/users', async (request, response) =>  {
  const users = await prisma.user.findMany({}) 

  return response.json(users);
});

app.post('user', async (request, response) =>  {  
  const body: any = request.body;   

  const user = await prisma.user.create({
    data:{
      Nome : body.nome,
      Email : body.nome,
      Senha : body.nome,
      CEP : body.nome,
      Logradouro : body.nome,
      Complemento : body.nome,
      Cidade : body.nome,
      Estado : body.nome,
      Aceite : body.nome
    }
  })
  return response.status(201).json(user);
});

/* 
app.get('/games/:id/ads', async (request, response) => {    
  const gameId = request.params.id;

  const ads = await prisma.ad.findMany({
    select: {  
      id: true,
      name: true,
      weekDays: true,
      useVoiceChannel: true,
      yearsPlaying: true,
      hourStart: true,
      hourEnd: true,      
    },
    where: {
      gameId,
    },
    orderBy:{
      createdAt: 'desc'
    }
  })

  return response.json(ads.map(ad =>{
    return {
      ...ad, 
      weekDays: ad.weekDays.split(','),
      hourStart: convertMinutesToHourString(ad.hourStart),
      hourEnd: convertMinutesToHourString(ad.hourEnd)
    }
  }));
})

app.get('/ads/:id/discord', async (request, response) => {    
  const adId = request.params.id;

  const ad = await prisma.ad.findUniqueOrThrow({
    select: {
      discord: true,
    },
    where: {
      id: adId,
    }
  })
  return response.json({
    discord: ad.discord,
  })
})
 */
app.listen(3333, () => console.log("Rodando na porta 3333..."))