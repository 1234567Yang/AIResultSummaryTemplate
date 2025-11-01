function insertOneConfusionMatrix(modelName, tp, tn, fp, fn){
    let template = document.getElementById("confusion-matrix-demo").cloneNode(true);
    template.id = "";


    template.getElementsByClassName("single-confusion-matrix-model-name")[0].innerHTML = modelName;
    template.getElementsByClassName("confusion-matrix-tp")[0].innerHTML = tp + " (TP)";
    template.getElementsByClassName("confusion-matrix-tn")[0].innerHTML = tn + " (TN)";
    template.getElementsByClassName("confusion-matrix-fp")[0].innerHTML = fp + " (FP)";
    template.getElementsByClassName("confusion-matrix-fn")[0].innerHTML = fn + " (FN)";


    let container = document.getElementById("confusion-matrix-container");
    container.insertAdjacentHTML("beforeend", template.outerHTML);

}
