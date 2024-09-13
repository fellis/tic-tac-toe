# Interactive CLI Application

## Overview
This project is an interactive Command-Line Interface (CLI) application built using **Node.js**. It handles dynamic color strategies, interactive questioning, and navigation, employing various design patterns and dependency injection principles. The application is modular, scalable, and easily extendable, making it a robust solution for complex CLI-based workflows.

## Key Features
- **Dynamic Color Strategies**: Dynamically load and apply different color strategies for CLI output to enhance the user interface and experience.
- **Interactive Questioning**: Implements an interactive questioning system that guides users through prompts and effectively handles responses.
- **Command Pattern**: Encapsulates requests as objects, enabling clients to manage queues, requests, and operations.
- **Factory Pattern**: Facilitates object creation without specifying the exact class of the object, supporting complex object creation.
- **Builder Pattern**: Separates the construction of complex objects from their representation, allowing different outputs using the same process.
- **Dependency Injection**: Manages dependencies using dependency injection, promoting modularity and ease of testing.
- **Strategy Pattern**: Enables the application to select algorithms at runtime for different functionalities like color handling and scenario creation.
- **Extensibility**: Easily add new features and strategies with minimal changes to the existing codebase.

## Technology Stack
- **Node.js**: The runtime environment for executing JavaScript code server-side.
- **Inquirer.js**: A library for creating interactive command-line user interfaces.
- **Node-Dependency-Injection**: A dependency injection container for Node.js, used to efficiently manage and inject dependencies.

## Design Patterns Used
- **Command Pattern**: Separates command issuing from handling, facilitating undoable operations and command queues.
- **Strategy Pattern**: Encapsulates a family of algorithms, making them interchangeable for flexible, reusable code.
- **Factory Pattern**: Encapsulates object creation, enabling complex object creation without specifying the exact class.
- **Builder Pattern**: Separates the construction of a complex object from its representation, allowing for different outputs from the same process.
- **Dependency Injection**: Enhances modularity and testability by injecting dependencies instead of hardcoding them.

## Example Use Cases
- **Dynamic CLI Color Customization**: Change CLI text colors based on user preferences or application state.
- **Interactive User Scenarios**: Guide users through questions and navigate scenarios based on their responses.
- **Modular Command Execution**: Execute complex command sequences, easily adding or removing commands without altering core logic.

## Loading Scenarios
### Loading from an Object
Define scenarios programmatically in JavaScript objects for dynamic or logic-driven scenarios.

### Loading from a JSON File
Load scenarios from JSON files for predefined, human-readable configurations.

### Scenario Item Parameters
Each scenario item can include:
- `text`: The question text to display.
- `answers`: An array of possible answers:
  - `value`: The associated value of the answer.
  - `text`: The displayed answer text.
  - `question`: A nested question triggered by this answer.
  - `goToParent`: A boolean to indicate navigation back to the parent question.
  - `drawField`: An optional parameter for rendering visual aids or relevant diagrams.

## How It Works
1. **Initialization**: The application initializes by loading configurations and dependencies from `services.yml`.
2. **Color Strategy Loading**: `LoadColorStrategiesCommand` dynamically loads color strategies from the `data/colors` directory.
3. **Interactive Questioning**: The `InteractiveQuestion` class uses command patterns to prompt and process user responses through `AskQuestionCommand` and `AnalyzeAnswerCommand`.
4. **Scenario Management**: Manages user scenarios through strategies defined in the `scenario` service, dynamically navigating based on inputs.
5. **Object Creation**: Uses the Factory pattern to encapsulate object creation logic and the Builder pattern for step-by-step construction of complex objects.


To get started with the Interactive CLI Application, follow these steps:

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   ```
Replace <repository-url> with the URL of the repository you want to clone.

2. **Navigate to the Project Directory
```bash
cd <project-directory>
```
Replace <project-directory> with the name of the directory where the project was cloned.
3. **Start the Application
```bash
npm start
```
This command will start the CLI application and you can begin interacting with it.
