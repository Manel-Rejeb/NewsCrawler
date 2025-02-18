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

    @GetMapping("/everything")
    public ResponseEntity<Page<Article>> GET(@RequestParam(required = false) String q, @PageableDefault(page = 1, size= 25) Pageable pageable) {
        return ResponseEntity.ok(articleService.getArticles(q, pageable));
    }

    @GetMapping("/headlines")
    public ResponseEntity<List<Article>> GET() {
        return ResponseEntity.ok(articleService.getHeadlines());
    }

    @GetMapping("/sources")
    public ResponseEntity<List<Source>> GETSources() {
        return ResponseEntity.ok(articleService.getSources());
    }

}