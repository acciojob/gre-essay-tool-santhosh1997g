//your code here
//your code here
const input_area = document.getElementById("evaluatedText");
const wordCount=document.getElementById("wordCount");



input_area.addEventListener("input",()=>{ 
    let txt =input_area.value.trim();
    wordCount.textContent=txt.split(/\s+/).filter(
        (item) => item).length;
    });