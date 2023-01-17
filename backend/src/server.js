// default modules
const express = require('express');
const app = express();
const cors = require('cors')

// modules
const routers = require('./router/index');
const { sequelize } = require('./api/model/index');

app.use(cors());
app.use(express.json()); // Tratar as requisições em formato JSON
app.use('/', routers); // a partir da / o router é responsável pelas rotas

// sincroniza o banco com a aplicação
// add dentro do async() quando precisa resetar o banco {force: true}
sequelize.sync().then(() => {
  console.log('Conectado com o banco de dados!');
}).catch((error) => {
  console.error('Houve algum erro', error)
})

const port = 8080;
const link = 'http://localhost:8080';
app.listen(port, (req, res) => {
  console.log(`Server running at port: ${port}. Link: ${link}`)
});
// console.log(__dirname);