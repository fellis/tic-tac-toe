class Question {
    constructor(text, answers = []) {
        this.text = text;
        this.answers = answers;
    }

    askQuestion() {
        throw new Error("Method 'askQuestion' must be implemented in derived classes.");
    }
}

module.exports = Question;