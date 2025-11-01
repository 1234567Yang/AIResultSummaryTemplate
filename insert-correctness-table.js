function insertOneRowGeneral(modelName, howManyCorrect, howManyTotal, insertToId){
    let template = document.getElementById("correct-percentage-table-demo-row").cloneNode(true);
    template.id = ""; // 取消id

    template.getElementsByClassName("correct-percentage-name")[0].innerHTML = modelName;
    
    let calcuatedPercent = howManyCorrect * 1.0 / howManyTotal;
    template.getElementsByClassName("correct-percentage-visual-bar")[0].style = "width:" + 100 * calcuatedPercent + "% !important";
    template.getElementsByClassName("correct-percentage-percent")[0].innerHTML = calcuatedPercent;
    template.getElementsByClassName("correct-percentage-correct-number-and-all")[0].innerHTML = howManyCorrect + " / " + howManyTotal;



    let table = document.getElementById(insertToId);
    table.insertAdjacentHTML("beforeend", template.outerHTML);
}

function insertOneRowOverall(modelName, howManyCorrect, howManyTotal){
    insertOneRowGeneral(modelName = modelName, howManyCorrect = howManyCorrect, howManyTotal = howManyTotal, "correct-percentage-table-overall");
}

function insertOneRowHumanWritten(modelName, howManyCorrect, howManyTotal){
    insertOneRowGeneral(modelName = modelName, howManyCorrect = howManyCorrect, howManyTotal = howManyTotal, "correct-percentage-table-detect-human-written");
}

function insertOneRowAIGC(modelName, howManyCorrect, howManyTotal){
    insertOneRowGeneral(modelName = modelName, howManyCorrect = howManyCorrect, howManyTotal = howManyTotal, "correct-percentage-table-detect-aigc");
}



// setTimeout(()=>{insertOneRow("ChatGPT", 300, 400);},500);
// setTimeout(()=>{insertOneRow("Deepseek", 342, 400);},500);