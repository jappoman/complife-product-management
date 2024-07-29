# Complife Product Management

Complife Product Management è un'applicazione full-stack per la gestione dei prodotti. Include un backend costruito con NestJS e un frontend costruito con Vue.js.

## Tecnologie Utilizzate

- **Backend**: NestJS, TypeScript, PostgreSQL, Docker
- **Frontend**: Vue.js, Vue Router, Axios
- **Database**: PostgreSQL
- **Containerizzazione**: Docker

## Prerequisiti

Assicurati di avere installato i seguenti strumenti:

- Node.js e npm
- Docker e Docker Compose
- Git

## Setup del Progetto

### Clonazione del Repository

```bash
git clone https://github.com/jappoman/complife-product-management.git
cd complife-product-management
```

### Setup del Backend
Naviga nella directory del backend:

```bash
cd backend
```
#### Installa le dipendenze:

```bash
npm install
```

#### Avvia il backend con Docker Compose:

```bash
docker-compose up
```
### Setup del Frontend
Naviga nella directory del frontend:

```bash
cd frontend
```

#### Installa le dipendenze:

```bash
npm install
```

#### Avvia il server di sviluppo:

```bash
npm run serve
```

### Altri comandi utili
#### Spostarsi nel backend
```bash
cd backend
```
##### Eseguire i test:

```bash
npm run test
```

#### Spostarsi nel frontend
```bash
cd frontend
```

##### Compilare il progetto:

```bash
npm run build
```

## Test

Questo progetto utilizza Jest per eseguire i test. I test sono divisi in quattro file principali:
- AppController Test
- ProductService Test
- ProductController Test
- App Test

### AppController Test
Il file ```src/app.controller.spec.ts``` contiene i test per il controller principale dell'applicazione. Questi test verificano che il controller restituisca la stringa "Hello World!".

### ProductService Test
Il file ```src/product/product.service.spec.ts``` contiene i test per il servizio ProductService. Questi test verificano che tutte le operazioni CRUD (Create, Read, Update, Delete) funzionino correttamente utilizzando dati mock.

### ProductController Test
Il file ```src/product/product.controller.spec.ts``` contiene i test per il controller ProductController. Questi test verificano che il controller sia definito e che ritorni correttamente tutti i prodotti.

### App Test
Il file ```test/app.e2e-spec.ts``` contiene i test per verificare il flusso completo dell'applicazione.

### Esecuzione dei Test
Per eseguire i test unitari, utilizza il comando:
```bash
npm run test
```

Per eseguire i test e2e, utilizza il comando:
```bash
npm run test:e2e
```

Assicurati di trovarti nella directory backend quando esegui questi comandi.