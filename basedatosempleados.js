let empleados=Array(
    {
        id:1,
        nombre:"Brenda Laura Ortiz Garcia",
        cargo:"CEO",
        telefono:"3042175054",
        correo:"brendaortiz@comics.com",
        salario:10000000,
        contactoEmergencia:"3012349365",
        foto:"./img/image2.jpeg"
    },
    {
        id:2,
        nombre:"Laura Galvis",
        cargo:"Programadora",
        telefono:"3042175054",
        correo:"lauragg@comics.com",
        salario:7000000,
        contactoEmergencia:"3012349365",
        foto:"./img/image3.jpeg"
    },
    {
        id:3,
        nombre:"Maria del Pilar G",
        cargo:"Marketing Digital",
        telefono:"3042175054",
        correo:"Mpg@comics.com",
        salario:5500000,
        contactoEmergencia:"3012349365",
        foto:"./img/image4.jpeg"
    },
    {
        id:4,
        nombre:"Andrea Lopez",
        cargo:"Gerente",
        telefono:"3042175054",
        correo:"DirecAndrea@comics.com",
        salario:6000000,
        contactoEmergencia:"3012375665",
        foto:"./img/image5.jpeg"
    },
    {
        id:5,
        nombre:"Valentina Martinez",
        cargo:"Supervisora",
        telefono:"3042175054",
        correo:"valentinaMM@comics.com",
        salario:4500000,
        contactoEmergencia:"3012389665",
        foto:"./img/image6.jpeg"
    },
    {
        id:6,
        nombre:"Liliana Perez ",
        cargo:"Asesora Call Center",
        telefono:"3112175054",
        correo:"LilPP@comics.com",
        salario:2800000,
        contactoEmergencia:"3112349365",
        foto:"./img/image7.jpeg"
    },
    {
        id:7,
        nombre:"Karen Prado",
        cargo:"Psicologa",
        telefono:"3202175054",
        correo:"PsicKarenz@comics.com",
        salario:5600000,
        contactoEmergencia:"3212349365",
        foto:"./img/image8.jpeg"
    },
    {
        id:8,
        nombre:"Karina Rodriguez",
        cargo:"Asesora C-C Ventas",
        telefono:"3142175054",
        correo:"AseKarin@comics.com",
        salario:2800000,
        contactoEmergencia:"3142349365",
        foto:"./img/image9.jpeg"
    },
    {
        id:9,
        nombre:"Maria A Quintana",
        cargo:"Consultora",
        telefono:"3059875054",
        correo:"MariaCAQ@comics.com",
        salario:3600000,
        contactoEmergencia:"3789349365",
        foto:"./img/image10.jpeg"
    },
    {
        id:10,
        nombre:"Alejandra Montoya",
        cargo:"Contadora",
        telefono:"3215175054",
        correo:"AleMCP@comics.com",
        salario:6000000,
        contactoEmergencia:"3426349365",
        foto:"./img/image11.jpeg"
    },
    {
        id:11,
        nombre:"Diana Rojas",
        cargo:"Talento Humano",
        telefono:"3215485054",
        correo:"RHDianaR@comics.com",
        salario:3800000,
        contactoEmergencia:"3846349365",
        foto:"./img/image12.jpeg"
    },
    {
        id:12,
        nombre:"Juana Rios",
        cargo:"Servicios Generales",
        telefono:"3218465054",
        correo:"ServJuana@comics.com",
        salario:2600000,
        contactoEmergencia:"3326349365",
        foto:"./img/image13.jpeg"
    },
    {
        id:13,
        nombre:"Dayana Hernandez",
        cargo:"Asesora call center",
        telefono:"3213575054",
        correo:"CCDayana@comics.com",
        salario:2800000,
        contactoEmergencia:"3986349365",
        foto:"./img/image14.jpeg"
    },
    {
        id:14,
        nombre:"Manuela Zuñiga",
        cargo:"Programadora",
        telefono:"3216235054",
        correo:"ManuP@comics.com",
        salario:7000000,
        contactoEmergencia:"3357349365",
        foto:"./img/image15.jpeg"
    },
    {
        id:15,
        nombre:"Laura Cano",
        cargo:"Analista",
        telefono:"3211595054",
        correo:"LauraA@comics.com",
        salario:3000000,
        contactoEmergencia:"3357349365",
        foto:"./img/image16.jpeg"
    },
    {
        id:16,
        nombre:"Isabell Duque",
        cargo:"Community Manager",
        telefono:"3216585054",
        correo:"CommunityIsabell@comics.com",
        salario:5000000,
        contactoEmergencia:"3338349365",
        foto:"./img/image17.jpeg"
    },
    {
        id:17,
        nombre:"Vanesa Restrepo",
        cargo:"Logistica",
        telefono:"3211675054",
        correo:"VanesR@comics.com",
        salario:3000000,
        contactoEmergencia:"3386349365",
        foto:"./img/image18.jpeg"
    },
    {
        id:18,
        nombre:"Zharick Salgado",
        cargo:"Directora",
        telefono:"3216645054",
        correo:"ZSdireccion@comics.com",
        salario:6000000,
        contactoEmergencia:"3426349365",
        foto:"./img/image19.jpeg"
    },
    {
        id:19,
        nombre:"Valeria Rojas",
        cargo:"TIC",
        telefono:"3216485054",
        correo:"valRojasTIC@comics.com",
        salario:4000000,
        contactoEmergencia:"3186349365",
        foto:"./img/image20.jpeg"
    },
    {
        id:20,
        nombre:"Andreina Velez",
        cargo:"Desarrolladora",
        telefono:"3216405054",
        correo:"AndreinaVD@comics.com",
        salario:7000000,
        contactoEmergencia:"3147849365",
        foto:"./img/image21.jpeg"
    }


)

//Creando una referencia al contendor de empleados
let contendor=document.getElementById("contenedor")

//pasos para crear una lista dinamica de elementos

//1.Debo recorrer la base de datos del problema:
empleados.forEach(function(empleado){
    console.log(empleado)

    let columna=document.createElement("div")
    columna.classList.add("col")




    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card","shadow")




    let foto=document.createElement("img")
    foto.classList.add("img-fluid","mx-auto","d-block")
    foto.src=empleado.foto




    let nombre=document.createElement("h3")
    nombre.textContent=empleado.nombre




    let cargo=document.createElement("h4")
    cargo.textContent=empleado.cargo


    let telefono=document.createElement("h3")
    telefono.textContent=empleado.telefono


    let correo=document.createElement("h3")
    correo.textContent=empleado.correo


    let salario=document.createElement("h3")
    salario.textContent=empleado.salario



    //se asocian las estructuras en un orden logico

    tarjeta.appendChild(nombre)
    tarjeta.appendChild(cargo)
    tarjeta.appendChild(salario)
    tarjeta.appendChild(correo)
    tarjeta.appendChild(telefono) 
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    contendor.appendChild(columna)
})