function analysisSingle(modelName, howManyTotalHumanWritten, howManyCorrectHumanWritten, howManyTotalAIGC, howManyCorrectAIGC) {

    insertOneRowOverall(modelName = modelName, howManyCorrect = howManyCorrectHumanWritten + howManyCorrectAIGC, howManyTotal = howManyTotalHumanWritten + howManyTotalAIGC)
    insertOneRowHumanWritten(modelName = modelName, howManyCorrect = howManyCorrectHumanWritten, howManyTotal = howManyTotalHumanWritten)
    insertOneRowAIGC(modelName = modelName, howManyCorrect = howManyCorrectAIGC, howManyTotal = howManyTotalAIGC)


    const calculatedTp = howManyCorrectAIGC;
    const calculatedTn = howManyCorrectHumanWritten;
    const calculatedFp = howManyTotalHumanWritten - howManyCorrectHumanWritten;
    const calculatedFn = howManyTotalAIGC - howManyCorrectAIGC;

    // 插入混淆矩阵
    insertOneConfusionMatrix(modelName = modelName,
        tp = calculatedTp,
        tn = calculatedTn,
        fp = calculatedFp,
        fn = calculatedFn
    );

    // 插入F1 Score行
    insertOneF1ScoreRow(modelName = modelName, tp = calculatedTp, fp = calculatedFp, fn = calculatedFn);

}



setTimeout(() => {
    analysisSingle("This is just a demo, I can change this at any time", 400, 103, 400, 76);
    analysisSingle("ChatGPT", 400, 285, 400, 304);
    analysisSingle("Claude", 400, 374, 400, 372);
    analysisSingle("Deepseek", 400, 357, 400, 285);
    analysisSingle("Gemini", 400, 398, 400, 132);
    analysisSingle("Inset another row", 400, 400, 400, 399);
    analysisSingle("Inset one more row maybe", 400, 29, 400, 0);
}, 500);