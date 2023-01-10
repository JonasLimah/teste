let listMovie = [
    acao = [
        {nome: "007",idade:16,ano:2000},
        {nome:'jungle',idade:13,ano:2016},
        {nome:'veloses e furiosos',idade:13,ano:2019},
        {nome:'vikings',idade:17,ano:2017},
    ],
    terror = [
        {nome: "mirror",idade:18,ano:2001},
        {nome:'exoscista',idade:17,ano:2018},
        {nome:'furiosos',idade:16,ano:2020},
        {nome:'hiden',idade:17,ano:2019},
    ],
    romance = [
        {nome: "amor",idade:16,ano:2014},
        {nome:'love',idade:17,ano:2022},
        {nome:'fuck',idade:18,ano:2021},
        {nome:'sex',idade:17,ano:2023},
    ]
]

let newList = listMovie[2].filter((i)=>{
    return (i.ano >= 2022) ? true:false ;
})

console.log(newList)
