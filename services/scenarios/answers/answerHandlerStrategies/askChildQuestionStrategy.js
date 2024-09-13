const AnswerAnalyzerStrategy = require('./core/answerHandlerStrategy');

class AskChildQuestionStrategy extends AnswerAnalyzerStrategy {
    performAction(selectedAnswer, currentQuestion, parentChain) {
        parentChain.push(currentQuestion);
        selectedAnswer.question.askQuestion(parentChain);
    }

    shouldUse(selectedAnswer) {
        return selectedAnswer.question !== undefined;
    }
}

module.exports = AskChildQuestionStrategy;