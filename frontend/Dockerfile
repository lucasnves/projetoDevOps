# Use a imagem oficial do Node.js como base
FROM node:18 AS build

# Crie o diretório de trabalho
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o restante do código
COPY . .

# Execute o build da aplicação
RUN npm run build

# Use uma imagem nginx para servir o frontend
FROM nginx:alpine

# Copie os arquivos de build para o diretório do Nginx
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exponha a porta que o Nginx usa
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
