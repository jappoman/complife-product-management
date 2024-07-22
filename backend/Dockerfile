# Usa un'immagine di base ufficiale di Node.js
FROM node:18

# Crea e imposta la directory di lavoro
WORKDIR /usr/src/app

# Copia i file di dipendenze e installale
COPY package*.json ./
RUN npm install

# Copia il resto dell'applicazione
COPY . .

# Compila l'applicazione
RUN npm run build

# Esponi la porta dell'applicazione
EXPOSE 3000

# Comando per avviare l'applicazione
CMD [ "node", "dist/main.js" ]
