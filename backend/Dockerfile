# Use a imagem Node.js oficial como base
FROM node:18

# Define o diretório de trabalho
WORKDIR /usr/src/app

# Copia o package.json e o package-lock.json
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código
COPY . .

# Expõe a porta que o app irá usar
EXPOSE 5001

# Comando para iniciar a aplicação
CMD ["node", "src/index.js"]