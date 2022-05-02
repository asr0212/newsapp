


const searchFun = async() => {
    const q = document.getElementById("search_input").value;
    const url = `https://masai-mock-api.herokuapp.com/news?q=${q}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(data);
}

const searchData = () =>{
    if(KeyboardEvent == "Enter")
    console.log("yes");
}