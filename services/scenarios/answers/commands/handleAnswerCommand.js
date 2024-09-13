const Command = require('../../../core/command.js');

class HandleAnswerCommand extends Command {
    constructor(analyzeAnswerService, question, selectedAnswer, questionsLibrary) {
        super();
        this.analyzeAnswerService = analyzeAnswerService;
        this.question = question;
        this.selectedAnswer = selectedAnswer;
        this.questionsLibrary = questionsLibrary;
    }

    execute() {
        this.analyzeAnswerService.performAction(this.selectedAnswer, this.question, this.questionsLibrary);
    }
}

module.exports = HandleAnswerCommand;