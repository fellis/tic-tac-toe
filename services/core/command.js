class Command {
    execute() {
        throw new Error('execute() method must be implemented');
    }
}

module.exports = Command;