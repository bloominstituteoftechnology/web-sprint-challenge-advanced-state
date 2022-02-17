# Sprint Challenge: Advanced State Management

## MVP

Make the app work like [this prototype](https://advanced-state-wheel.herokuapp.com/)

## Prep

Use the following tools to investigate the prototype in Chrome Dev Tools:

- Elements tab
- Network tab
- Redux extension tab

## Setup

Run the project locally:

- `npm install`
- `npm run dev`
- `npm run test`

## API

Available endpoints:

- `[GET] http://localhost:9000/api/quiz/next`
  - obtains the next quiz
- `[POST] http://localhost:9000/api/quiz/new`
  - expects `{ question_text, true_answer_text, false_answer_text }`
  - example of payload `{ "question_text": "What is foo?", "true_answer_text": "bar", "false_answer_text": "baz" }`
  - returns the new quiz
- `[POST] http://localhost:9000/api/quiz/answer`
  - example of payload `{ "quiz_id": "xyz", "answer_id": "uvw" }`
  - expects `{ quiz_id, answer_id }`
  - returns a success or failure message
