# Color Manager API

A simple Node.js API using Express to manage a collection of colors. This API allows users to perform CRUD (Create, Read, Update, Delete) operations on color data, including listing all colors, adding new colors, retrieving a specific color by name, updating existing colors, and deleting colors.

## Features

- List all colors
- Add a new color
- Retrieve a specific color by name
- Update a specific color by name
- Delete a specific color by name

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/color-manager-api.git
    ```

2. Navigate to the project directory:

    ```bash
    cd color-manager-api
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm run dev
    ```

2. The server will start on `http://localhost:3000`.

## API Endpoints

### List all colors

- **URL:** `/colors`
- **Method:** `GET`
- **Response:** JSON array of all color objects.

### Add a new color

- **URL:** `/colors`
- **Method:** `POST`
- **Body:** JSON object with `name` and `hex` properties.
- **Response:** JSON object of the newly added color.

- **Status 201**: Indicates that a resource has been created.

### Retrieve a specific color by name

- **URL:** `/colors/:name`
- **Method:** `GET`
- **Response:** JSON object of the requested color.
- **404 Error:** If the color is not found, returns a message "Color not found".

### Update a specific color by name

- **URL:** `/colors/:name`
- **Method:** `PUT`
- **Body:** JSON object with updated properties (`name`, `hex`).
- **Response:** JSON object of the updated color.
- **404 Error:** If the color is not found, returns a message "Color not found".

### Delete a specific color by name

- **URL:** `/colors/:name`
- **Method:** `DELETE`
- **Response:** JSON object of the deleted color.
- **404 Error:** If the color is not found, returns a message "Color not found".

## License

This project is licensed under the [MIT License](LICENSE).
