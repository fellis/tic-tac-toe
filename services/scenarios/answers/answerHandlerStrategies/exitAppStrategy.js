const AnswerAnalyzerStrategy = require('./core/answerHandlerStrategy');

class ExitAppStrategy extends AnswerAnalyzerStrategy {
    performAction(selectedAnswer, currentQuestion, parentChain) {
        console.log("Exiting");
        process.exit(0);
    }

    shouldUse(selectedAnswer) {
        return true;
    }
}

module.exports = ExitAppStrategy;