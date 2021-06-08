//api estática;
const express = require ('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

var DB = {
    title: [
        {
            id: 1,
            img: 'https://www.catho.com.br/educacao/blog/wp-content/uploads/sites/2/2019/01/2019-01-15-analise-e-desenvolvimento-de-sistemas.png',
            title: 'Análise e desenvolvimento de sistemas (tecnológico)',
            lessons: '20'
        },
        {
            id: 2,
            img: 'https://unilago.riopreto.br/wp-content/media//2019/01/construction-planning-drawings-P2BXJNR.jpg',
            title: 'Arquitetura e urbanismo',
            lessons: '30'
        },
        {
            id: 3,
            img: 'https://blog.estacio.br/wp-content/uploads/2020/11/estacio_sociedadedeensinosupoeriorestaciodesaltda_image_247-780x450.jpeg',
            title: 'Ciência da computação',
            lessons: '40'
        },
        {
            id: 4,
            img: 'https://www.unicesumar.edu.br/blog/wp-content/uploads/2017/03/unicesumar_unicesumaread_image_784-800x490.jpeg',
            title: 'Design de interiores (tecnológico)',
            lessons: '15'
        },
        {
            id: 5,
            img: 'https://www.revide.com.br/media/cache/04/a9/04a904c7d936283505830fc96e88a188.jpg',
            title: 'Jogos digitais (tecnológico)',
            lessons: '25'
        }  ,
        {
            id: 6,
            img: 'https://i0.wp.com/gestaodesegurancaprivada.com.br/wp-content/uploads/sistema-de-informacao.jpg?fit=720%2C405&ssl=1',
            title: 'Sistemas de informação (bacharelado)',
            lessons: '50'
        }
    
    
          
    ]
}

app.get('/title', (req, res) => {
    res.statusCode = 200;
    res.json(DB.title);
});

app.listen('4009');