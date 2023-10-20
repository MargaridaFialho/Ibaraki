##

# IBARAKI

> Este projeto consiste na criação de um website para o restaurante de sushi “IBARAKI”, localizado em Montemor-o-Novo. O principal objetivo é proporcionar aos nossos clientes uma experiência, que reflita a qualidade e o sabor dos nossos pratos de sushi, juntamente com a paisagem alentejana.
> Promover o restaurante e destacar os seus pontos fortes, apresentar o menu completo, incluindo opções com imagens, facilitar a reserva de mesas online e por fim, fornecer informações sobre a localização e abertura do restaurante (uma data com contagem decrescente para a abertura do restaurante na página principal).
> Este projeto foi realizado no ambito do meu curso fullstack para o projeto de frontend.

#

## Opções Técnicas

> O website será desenvolvido com HTML, CSS e JavaScript para a interface do utilizador. É prioridade garantir uma aparência moderna e responsiva. Relativamente ao design do website, iremos ter a Homepage, Sobre Nós, Menu (e páginas detalhe), Reservas com formulário e Contactos com mapa.

## Ferramentas e API’s Utilizadas

- React-bootstrap, para os layouts;
- Sass;
- React-router-dom;
- React-awesome-slider, para o slider da homepage;
- Swiper, para o slider da página menu;
- React-datepicker, para o formulário de reservas;
- React-leaflet, para mapa na página de contactos, o mapa é fornecido pelo OpenStreetMap;
- @fortawesome/fontawesome-svg-core;
- @fortawesome/free-solid-svg-icons;
- @fortawesome/react-fontawesome;
- Axios;
- Json-server;

## Images

### Homepage

![Homepage](/Ibaraki/ibaraki/src/imagensMD/image.png)

### Sobre nós

![Sobre nós](/Ibaraki/ibaraki/src/imagensMD/image1.png)

### Menu

![Menu](/Ibaraki/ibaraki/src/imagensMD/image2.png)

### Menu detalhe 1

![Menu detalhe](/Ibaraki/ibaraki/src/imagensMD/image3.png)

### Blog
![Blog](/Ibaraki/ibaraki/src/imagensMD/image4.png)

### Reservas

![Reservas](/Ibaraki/ibaraki/src/imagensMD/image5.png)

### Contactos

![Contactos](/Ibaraki/ibaraki/src/imagensMD/image6.png)

## Melhorias Futuras

> Backoffice para edição de todas as páginas, sistema de entrega online para pedidos de take-away e entrega em casa, tradução do website para diversos idiomas para atrair um público mais amplo e sistema de avaliações/comentários para recolher feedback dos clientes.

## Installation

```
git clone
npm install
```

## Correr no terminal
> Para correr a aplicação localmente temos de inserir no terminal "npm start".
Como o projeto utiliza um mock de base de dados, utilizamos o json-server, com esta finalidade. Assim, foi adcionado aos scripts do package.json o "npm run server" que corre o json-server na porta 5000.
Para correr este projeto coloquem dois terminais em simultaneo, cada um com cada comando em cima especificado. 
