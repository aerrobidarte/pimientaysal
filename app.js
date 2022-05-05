const express=require('express');
const app = express();
const path = require('path');

let publicPath=path.resolve(__dirname,'./public');
app.use(express.static(publicPath));

const home = require ('./routers/index.js');
const detalleMenu = require ('./routers/detalleMenu.js');

app.set('view engine','ejs')

app.use('/',home);
app.use('/detalle',detalleMenu);

app.listen(3000, ()=>{
    console.log("Servidor Funcionando");
});
