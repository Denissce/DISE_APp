const express = requiere('express');
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send('¡Hola, servidor!');
});

app.listen(port, () => {
     console.log(`El servidor esta en el puerto ${port}`);
});
