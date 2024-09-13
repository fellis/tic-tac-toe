const Command = require('../../../core/command.js');

class QuestionPromptCommand extends Command {
    constructor(askQuestionService, questionText, answers, callback) {
        super();
        this.askQuestionService = askQuestionService;
        this.questionText = questionText;
        this.answers = answers;
        this.callback = callback;
    }

    execute() {
        return this.askQuestionService.prompt({
            type: 'list',
            name: 'answer',
            message: this.questionText,
            choices: this.answers
        }).then(answers => {
            this.callback(answers.answer);
        });
    }
}

module.exports = QuestionPromptCommand;