package com.example.server;


import io.swagger.v3.oas.annotations.OpenAPIDefinition;

/**
 * OpenApiConfiguration defines the OpenAPI specifications for the News Application API.
 *
 * This class includes metadata about the API, such as:
 * - title: The title of the API.
 * - description: A brief overview of the API's functionality.
 * - version: The API's version number.
 * - servers: Defines the server(s) where the API is hosted, including the server URL.
 *
 * Example usage: This configuration is used with tools like Swagger UI to generate interactive
 * documentation for exploring and testing API endpoints.
 */
@OpenAPIDefinition(
        info = @io.swagger.v3.oas.annotations.info.Info(
                title = "News Application Api Definition",
                description = "This is the API definition for the News Application API.",
                version = "1.0"
        ),
        servers = {
                @io.swagger.v3.oas.annotations.servers.Server(
                        url = "http://localhost:8080",
                        description = "Local Dev Server"
                )
        }
)
public class OpenApiConfiguration {
}
