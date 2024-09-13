const InteractiveQuestion = require('../interactiveQuestion.js');
const inquirer = require('inquirer');
class QuestionsFactory {
    #answerAnalyzerService;
    #promptQuestionService;

    constructor(answerAnalyzerService) {
        this.#answerAnalyzerService = answerAnalyzerService;
        this.#promptQuestionService = inquirer;

    }

    createInteractiveQuestion(text, answers = []) {
        return new InteractiveQuestion(text, answers, this.#answerAnalyzerService, this.#promptQuestionService);
    }
}
module.exports = QuestionsFactory;