// 计算精确率、召回率和F1 Score的辅助函数
function calculatePrecision(tp, fp) {
    if (tp + fp === 0) return 0;
    return tp / (tp + fp);
}

function calculateRecall(tp, fn) {
    if (tp + fn === 0) return 0;
    return tp / (tp + fn);
}

function calculateF1Score(tp, fp, fn) {
    const precision = calculatePrecision(tp, fp);
    const recall = calculateRecall(tp, fn);
    if (precision + recall === 0) return 0;
    return 2 * (precision * recall) / (precision + recall);
}

// 插入F1 Score表格行的函数
function insertOneF1ScoreRow(modelName, tp, fp, fn) {
    let template = document.getElementById("f1-score-table-demo-row").cloneNode(true);
    template.id = "";

    template.getElementsByClassName("f1-score-model-name")[0].innerHTML = modelName;

    const precision = calculatePrecision(tp, fp);
    const recall = calculateRecall(tp, fn);
    const f1Score = calculateF1Score(tp, fp, fn);

    template.getElementsByClassName("f1-score-precision")[0].innerHTML = precision;
    template.getElementsByClassName("f1-score-recall")[0].innerHTML = recall;
    template.getElementsByClassName("f1-score-f1-score")[0].innerHTML = f1Score;

    let table = document.getElementById("f1-score-table");
    table.insertAdjacentHTML("beforeend", template.outerHTML);
}