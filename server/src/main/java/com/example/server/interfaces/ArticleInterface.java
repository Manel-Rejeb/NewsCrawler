package com.example.server.interfaces;

import com.example.server.entity.Article;
import com.example.server.entity.Source;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ArticleInterface {
    public Page<Article> getArticles(String searchNewsTopic, Pageable pageable);
    public List<Article> getHeadlines();
    public List<Source> getSources();
}
