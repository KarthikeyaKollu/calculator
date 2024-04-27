# Workflow Builder Application

---

## Description

This project is a comprehensive Workflow Builder application developed using React.js for the frontend and Node.js (Express.js) for the backend. The application allows users to visually construct workflows using drag-and-drop interface with pre-defined nodes. Once created, workflows can be saved, loaded, and executed to perform various data manipulation tasks. The backend interprets the workflow and executes tasks in the defined sequence.

---

## Features

- **Drag-and-Drop Interface:** Users can drag and drop workflow nodes onto the canvas to build their desired workflow.

- **Workflow Execution:** Users can upload data and select a workflow to trigger the execution. The backend executes tasks based on the defined workflow.

- **Workflow Nodes:** Includes nodes such as Filter Data, Wait, Convert Format, and Send POST Request, each performing specific data manipulation tasks.

- **Save and Load Workflows:** Users can save and load previously created workflows for reusability.

- **Visual Feedback:** Provides visual feedback on workflow execution progress.

- **Error Handling:** The application handles errors gracefully and provides informative feedback to the user interface.

---

## Technical Stack

- **Frontend:** React.js, Reactflow, Zustand (for state management)

- **Backend:** Node.js (Express.js)

- **Database:** MongoDB/PostgreSQL (as per choice)

- **Additional Libraries:** Reactflow for workflow visualization and execution.
---

## Setup Instructions

1. **Clone the repository:**

```bash

git clone https://github.com/your-username/workflow-builder.git

```
2. **Navigate to the project directory:**

```bash

cd workflow-builder

```
3. **Install dependencies for both frontend and backend:**

```bash

# Install frontend dependencies

cd frontend

npm install

# Install backend dependencies

cd ..backend

npm install

```

4. **Set up the database (MongoDB/PostgreSQL) and configure connection details in the backend.**

5. **Start the frontend and backend servers:**

```bash

# Start frontend server

cd ..frontend

npm start

# Start backend server

cd ..backend

npm start

```

6. **Access the application at** `http://localhost:3000\` **in your web browser.**

---

## Screenshots

1. **Drag-and-Drop Workflow Builder Screen**

!\[Workflow Builder\](workflow\_builder\_screenshot.png)

2. **Upload CSV & Trigger Workflow**

!\[Upload CSV & Trigger Workflow\](upload\_csv\_screenshot.png)

3\. **JSON Output through POST Request**

\[No screen required for this one\]

---

## Video Demo

\[Provide link to the video demo of the application running\]

---

## Contributors

- [Your Name](https://github.com/your-username)

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgements

- Reactflow documentation

- Reactflow examples

- Zustand documentation

- Node.js documentation

---

## Notes

[Add any additional notes or instructions here, if necessary]

---

Feel free to reach out if you have any questions or need further assistance!

**Happy Workflow Building!**
