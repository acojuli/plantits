import firebase from "firebase/app";
import "firebase/firestore";
import {firebaseConfig} from './src/firebaseConfig';

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: firebaseConfig.apiKey,
  authDomain: firebaseConfig.authDomain,
  projectId: firebaseConfig.projectId,
});

var db = firebase.firestore();

var items = [
    {
        category: "Sansevierias",
        description: "Ese rincón difícil en donde no vive nada, ella se lo va a apropiar.",
        fullDescription: "Riego: en verano 1 vez por semana y en invierno cada 15 días",
        pictureUrl: "/images/sansevieria-trifasciata.jpg",
        price:580,
        stock:12,
        title:"Sansevieria trifasciata",
    },
    {
        category: "Monsteras",
        description: "Nada como ver la vida a través de las hojas de una Monstera, no?.",
        fullDescription: "Es una planta trepadora en su hábitat natural, no cortar sus largas raíces colgantes. Sus hojas están perforadas naturalmente para dejar pasar la luz y ofrecer menor resistencia a la lluvia y el viento. De gran desarrollo, ubicar en lugares amplios.",
        pictureUrl: "/images/monstera-deliciosa.jpg",
        price: 1200,
        stock: 2,
        title: "Monstera Deliciosa"
    },
    {
        category: "Peperomias",
        description: "La naturaleza da frutas, verduras, y sandías. A quién no le gusta la sandía?",
        fullDescription: "CUIDADOS . Fácil! Luz . Tolera poca uz indirecta. Riego . Dejar secar el sustrato entre riegos. Sustrato . Apto para plantas de interior, aireado y nutritivo. Humedad . Tolera poca humedad relativa ambiente.",
        pictureUrl: "/images/peperomia-watermelon.jpg",
        price: 1280,
        stock: 12,
        title: "Peperomia Watermelon"
    },
    {
        category: "Alocasias",
        description: "Esta inmensa Alocasia, dicen que comparte las jungle vibes con la monstera.",
        fullDescription: "CUIDADOS: Intermedio. Luz: Tolera intermedia luz indirecta. Riego: Regar justo antes de que el sustrato seque. Sustrato: Requiere alta humedad relativa ambiente.",
        pictureUrl: "/images/alocasia-amazonica.jpg",
        price: 1125,
        stock: 123,
        title:"Alocasia Amazónica"
    },
    {
        category: "Peperomias",
        description: "Un buen comienzo para incursionar en la familia de las Peperomias.",
        fullDescription: "Hojas bien brillantes, y fácil de cuidar. Lindo arbusto. CUIDADOS . Fácil! Luz . Requiere alta luz indirecta. Riego . Dejar secar el sustrato entre riegos. Sustrato . Apto para plantas de interior, aireado y nutritivo. Humedad . Tolera poca humedad relativa ambiente.",
        pictureUrl: "/images/peperomia-obtusifolia.jpg",
        price: 620,
        stock: 72,
        title: "Peperomia Obtusifolia"
    },
    {
        category: "Dieffenbachias",
        description: "La familia de las Aglaonema y Dieffenbachia son súper fieles y fáciles de cuidar.",
        fullDescription: "CUIDADOS . Fácil! Luz . Tolera intermedia luz indirecta. Riego . Dejar secar el sustrato entre riegos. Sustrato . Apto para plantas de interior, aireado y nutritivo. Humedad . Tolera poca humedad relativa ambiente.",
        pictureUrl: "/images/aglaonema.jpg",
        price: 990,
        stock: 21,
        title: "Aglaonema"
    },
    {
        category: "Sansevieria",
        description: "Sus hojas como rayos forman un arco de 180 grados. Como una estrella de mar.",
        fullDescription: "En sus genes corre la savia de la resiliencia y la tolerancia a la poca luz, viene de familia. Cada hoja, como rayos arman un arco de 180 grados, como si fuera una estrella. Algo que solo una Sansevieria podía hacer.",
        pictureUrl: "/images/sansevieria-starfish.jpg",
        price: 1380,
        stock: 43,
        title: "Sansevieria Starfish"
    },
    {
        category: "Monsteras",
        description: "Esta beba se caracteriza por tener hojas de color verde intenso.",
        fullDescription: "CUIDADOS . Fácil! Luz . Tolera intermedia luz indirecta. Riego . Dejar secar el sustrato entre riegos. Sustrato . Apto para plantas de interior, aireado y nutritivo. Humedad . Tolera intermedia humedad relativa ambiente.",
        pictureUrl: "/images/monstera-letcheriana.jpg",
        price: 1100,
        stock: 22,
        title: "Monstera Letcheriana"
    },  
]

var categories = [
    {
        name: "Sansevierias",
        pictureUrl: "./images/category-1.png",
    },
    {
        name: "Monsteras",
        pictureUrl: "./images/category-2.png",
    },
    {
        name: "Peperomias",
        pictureUrl: "./images/category-3.png",
    },
    {
        name: "Alocasias",
        pictureUrl: "./images/category-4.png",
    },
    {
        name: "Dieffenbachias",
        pictureUrl: "./images/category-5.png",
    },   
];

items.forEach(function (obj) {
    db.collection("items")
      .add({
        category: obj.category,
        description: obj.description,
        fullDescription: obj.fullDescription,
        pictureUrl: obj.pictureUrl,
        price: obj.price,
        stock: obj.stock,
        title: obj.title,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });
  
  categories.forEach(function (obj) {
    db.collection("categories")
      .add({
        name: obj.name,
        pictureUrl: obj.pictureUrl,
      })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  });