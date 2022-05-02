const search = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
       return data;  
}


const searchRes = (cc) => {
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${cc}`;
    const data = search(url);
 
     data.then((res)=>{
         appendData(res.articles);
     });
 
 };
 searchRes("in");
const box = document.getElementById("results");
const appendData = (data) => {
       box.innerHTML = null;
       data.forEach((ele) => {
           let div = document.createElement("div");
           let imgDiv = document.createElement("div");
           let img1 = document.createElement("img");
           img1.src = ele.urlToImage;
           imgDiv.append(img1);
           let contencDiv = document.createElement("div");
           let h4 = document.createElement("h4");
           h4.innerText = ele.title;
           let p = document.createElement("p");
           p.innerText = ele.description;
           contencDiv.append(h4,p);
           div.append(imgDiv,contencDiv)
           div.addEventListener("click",()=> {
                localStorage.setItem("news",JSON.stringify(ele));
                window.location.href = "../news.html";
           });
           box.append(div);
       });
}