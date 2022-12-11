
const downloadTxtFile = () => {
    //text content
    const texts = ["line 1", "line 2", "line 3"]
   // file object 
    const file = new Blob(texts, {type: "text/plain"});

//anchor link 

const element = document.createElement("a");
element.href = URL.createObjectURL(file);
element.download = "100ideas-" + Date.now() + ".txt";

// simulate link click

document.body.appendChild(element);


element.click();
}

export {downloadTxtFile};