const AnswerOption = require('../core/answer.js');

class AnswersFactory {
    createAnswerOption(text, goToParent = undefined, question = undefined) {
        return new AnswerOption(text, goToParent, question);
    }

}
module.exports = AnswersFactory;