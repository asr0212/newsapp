// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";

document.getElementById("navbar").innerHTML = navbar();


const data = JSON.parse(localStorage.getItem("news"));

const box = document.getElementById("detailed_news");
box.innerHTML = null;
let img1 = document.createElement("img");
img1.src = data.urlToImage;
let title = document.createElement("h3");
title.innerText = data.title;
let p = document.createElement("p");
p.innerText = data.content;

box.append(img1,title,p);