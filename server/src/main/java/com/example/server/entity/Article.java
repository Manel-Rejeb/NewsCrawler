package com.example.server.entity;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
public class Article {

    @JsonProperty("category")
    private String category;

    @JsonProperty("title")
    private String title;

    @JsonProperty("author")
    private String author;

    @JsonProperty("description")
    private String description;


    @JsonProperty("url")
    private String urlToImage;

    @JsonProperty("source")
    private String source;

    @JsonProperty("publishedAt")
    private String date;

    public Article(String category, String title, String author, String description, String urlToImage, String source, String date) {
        this.category = category;
        this.title = title;
        this.author = author;
        this.description = description;
        this.urlToImage = urlToImage;
        this.source = source;
        this.date = date;
    }
}
