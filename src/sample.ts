// Import the 'z' object from the 'zod' library, which is used for schema validation.
import { z } from 'zod';

// Import the 'express' framework to create a web server.
import express from "express";

// Initialize an Express application instance.
const app = express();

// Define a Zod schema for validating user profile data during updates.
const userProfileSchema = z.object({
    name: z.string().min(1, { message: "Name cannot be empty" }),
    email: z.string().email({ message: "Invalid email format" }),
    age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});

// Infer a TypeScript type from the Zod schema 'userProfileSchema'.
// 'z.infer' extracts the TypeScript type definition from the schema, so 'FinalUserSchema' will be a type with properties 'name' (string), 'email' (string), and 'age' (number | undefined).
type FinalUserSchema = z.infer<typeof userProfileSchema>;

// Define a PUT endpoint at '/user' to handle user profile updates.
app.put("/user", (req, res) => {
    // Use Zod's 'safeParse' method to validate the request body against the 'userProfileSchema'.
    // 'safeParse' returns an object with a 'success' boolean indicating if validation passed.
    const { success } = userProfileSchema.safeParse(req.body);

    // Assign the request body to 'updateBody' and explicitly type it as 'FinalUserSchema'.
    // This tells TypeScript that 'updateBody' should conform to the inferred type from the Zod schema.
    // However, note that this assignment does not guarantee runtime validation; it only helps with TypeScript's static type checking.
    // The actual validation is done by 'safeParse' above.
    const updateBody: FinalUserSchema = req.body;

    // Check if validation failed (i.e., 'success' is false).
    if (!success) {
        // If validation fails, send a 411 status code (Length Required) with an empty JSON response.
        // This could be improved by sending error details from 'safeParse' for better feedback.
        res.status(411).json({});
        return; // Exit the function to prevent further processing.
    }
    // If validation passes, proceed with updating the database (this is just a placeholder comment in the code).
    // In a real application, you would update the database with the validated 'updateBody' data here.

    // Send a success response with a JSON message indicating the user was updated.
    res.json({
        message: "User updated"
    });
});

// Start the Express server to listen on port 3000 for incoming requests.
app.listen(3000);
