class AnswerHandlerContext {
    #strategies

    constructor(...strategies) {
        this.#strategies = strategies
    }

    performAction(answer, questionService, questionsLibrary) {
        for (const strategy of this.#strategies) {
            if (strategy.shouldUse(answer)) {
                strategy.performAction(answer, questionService, questionsLibrary);
                return;
            }
        }
    }
}
module.exports = AnswerHandlerContext;