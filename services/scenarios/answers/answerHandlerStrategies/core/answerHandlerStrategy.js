class AnswerHandlerStrategy {
    performAction(selectedAnswer, currentQuestion, parentChain) {
        throw new Error('You have to implement the method navigate!');
    }

    shouldUse(selectedAnswer) {
        throw new Error('You have to implement the method isApplicable!');
    }
}

module.exports = AnswerHandlerStrategy;