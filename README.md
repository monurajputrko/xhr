# React Post App

This is a simple React application that allows users to view a list of posts fetched from an API and add new posts.

## Setup

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory:**

    ```bash
    cd react-post-app
    ```

3. **Install dependencies:**

    ```bash
    npm install
    ```

## Usage

1. **Run the development server:**

    ```bash
    npm start
    ```

2. **Open the application in your browser:**

    The development server should start running at `http://localhost:3000`. Open this URL in your web browser to view the application.

## Functionality

- The application consists of two main components:
    - `PostList`: Displays a list of posts fetched from the API.
    - `NewPostForm`: Allows users to add a new post by filling out a form.

- Posts are fetched from the JSONPlaceholder API (`https://jsonplaceholder.typicode.com/posts`).

- New posts are added using a POST request to the same API endpoint.

## Folder Structure

react-post-app/
│
├── src/
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── ...
│
├── public/
│ ├── index.html
│ └── ...
│
├── README.md
└── package.json


## Dependencies

- React
- ReactDOM

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
