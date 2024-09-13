const Question = require('./core/question.js');
const AskQuestionCommand = require('./commands/questionPromptCommand.js');
const AnalyzeAnswerCommand = require('../answers/commands/handleAnswerCommand.js');

class InteractiveQuestion extends Question {
    answerAnalyzerService;
    askQuestionService

    constructor(text, answers = [], answerAnalyzerService, askQuestionService) {
        super(text, answers);
        this.answerAnalyzerService  = answerAnalyzerService;
        this.askQuestionService = askQuestionService;
    }

    askQuestion(questionsLibrary = []) {
        const command = new AskQuestionCommand(
            this.askQuestionService,
            this.text,
            this.answers.map(answer => ({ name: answer.text, value: answer })),
    selectedAnswer => {
                const analyzeAnswerCommand = new AnalyzeAnswerCommand(
                    this.answerAnalyzerService,
                    this,
                    selectedAnswer,
                    questionsLibrary
                );
                analyzeAnswerCommand.execute();
            }
        );
        command.execute();
    }
}
module.exports = InteractiveQuestion;