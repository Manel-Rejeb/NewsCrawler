package com.example.server.controller;

import com.example.server.entity.Source;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.example.server.entity.Article;
import com.example.server.service.ArticleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/articles")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true", allowedHeaders = "*")



public class ArticleController {

  @Autowired
    private ArticleService articleService;

  /**
   * Retrieves a paginated list of articles, optionally filtered by a search query.
   *
   * @param q        (Optional) Search query to filter articles.
   * @param pageable Pagination details (defaults: page = 0, size = 25).
   * @return Paginated list of articles.
   */
    @GetMapping("/everything")
    public ResponseEntity<Page<Article>> GET(@RequestParam(required = false) String q, @PageableDefault(page = 1, size= 25) Pageable pageable) {
        return ResponseEntity.ok(articleService.getArticles(q, pageable));
    }

  /**
   * Retrieves a list of top headlines.
   *
   * @return List of top headline articles.
   */
    @GetMapping("/headlines")
    public ResponseEntity<List<Article>> GET() {
        return ResponseEntity.ok(articleService.getHeadlines());
    }

  /**
   * Retrieves a list of available news sources.
   *
   * @return List of news sources.
   */
    @GetMapping("/sources")
    public ResponseEntity<List<Source>> GETSources() {
        return ResponseEntity.ok(articleService.getSources());
    }

}
