<div align="center">
<img src="./Logo.svg" style="width:200px"></img>
</div>


<h1 align="center">Aagrispot</h1>


## Gerador de matrizes
Este projeto tem como objetivo criar uma plataforma para criar e calcular matrizes

## Como instalar
### Docker
Para instalar a aplicação baixe a aplicação docker através deste link: [Docker](https://docs.docker.com/desktop/windows/install/)

### Repositório dentro do docker hub
Após instalar o docker, baixe a imagem do aagrispot com os comandos:
```
docker push caj1n/aagrispot_client:latest
docker push caj1n/aagrispot_server:latest
```
Após baixar as imagens crie e execute os containers  com os seguintes comandos:
```
docker run --name aagrispot_client -p 3000:3000 caj1n/aagrispot_client
docker run --name aagrispot_server -p 5000:5000 caj1n/aagrispot_server
```
