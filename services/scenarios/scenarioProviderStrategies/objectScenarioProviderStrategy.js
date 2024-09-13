const ScenarioCreationStrategy = require('./core/scenarioCreationStrategy.js');

class ObjectScenarioProviderStrategy extends ScenarioCreationStrategy {
   #createFieldService;
   #questionsFactory;
   #answerOptionFactory;

    constructor(createFieldService, questionsFactory, answerOptionFactory) {
        super();
        this.#createFieldService = createFieldService;
        this.#questionsFactory = questionsFactory;
        this.#answerOptionFactory = answerOptionFactory;
    }

    createScenario(data, parentQuestionText = '') {
        const { text, answers, drawField } = data;
        let questionText = text;

        if (drawField) {
            const drawFieldString = this.#createFieldService.getMap(drawField);
            questionText += `\n\n${drawFieldString}`;
        }

        const parsedAnswers = answers.map(answer => {
            const {text, question, goToParent } = answer;
                return (question) ? this.#answerOptionFactory.createAnswerOption(text, goToParent, this.createScenario(question)) : this.#answerOptionFactory.createAnswerOption(text, goToParent);
        });

        return this.#questionsFactory.createInteractiveQuestion(questionText, parsedAnswers);
    }
}

module.exports = ObjectScenarioProviderStrategy;