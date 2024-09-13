const AnswerAnalyzerStrategy = require('./core/answerHandlerStrategy');

class ReAskParentQuestionStrategy extends AnswerAnalyzerStrategy {
    performAction(selectedAnswer, currentQuestion, parentChain) {
        const targetLevel = parentChain.length - selectedAnswer.goToParent;
        const parentQuestion = parentChain[targetLevel];
        parentQuestion.askQuestion(parentChain.slice(0, targetLevel));
    }

    shouldUse(selectedAnswer) {
        return selectedAnswer.goToParent !== undefined;
    }
}

module.exports = ReAskParentQuestionStrategy;