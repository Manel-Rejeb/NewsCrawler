package com.example.server.service;

import com.example.server.entity.Article;
import com.example.server.entity.Source;
import com.example.server.interfaces.ArticleInterface;
import com.kwabenaberko.newsapilib.NewsApiClient;
import com.kwabenaberko.newsapilib.models.request.EverythingRequest;
import com.kwabenaberko.newsapilib.models.request.SourcesRequest;
import com.kwabenaberko.newsapilib.models.request.TopHeadlinesRequest;
import com.kwabenaberko.newsapilib.models.response.ArticleResponse;
import com.kwabenaberko.newsapilib.models.response.SourcesResponse;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
@Service
public class ArticleService implements ArticleInterface {

    private final NewsApiClient newsApiClient = new NewsApiClient("65366ecfa5234932861be080f835eb62");

    @Override
    public Page<Article> getArticles(String searchNewsTopic, Pageable pageable) {
        CompletableFuture<Page<Article>> future = new CompletableFuture<>();
        newsApiClient.getEverything(
                new EverythingRequest.Builder()
                        .q(searchNewsTopic)
                        .page(pageable.getPageNumber())
                        .pageSize(pageable.getPageSize())
                        .build(),
                new NewsApiClient.ArticlesResponseCallback() {
                    @Override
                    public void onSuccess(ArticleResponse response) {
                        List<Article> news = new ArrayList<>();
                        response.getArticles().forEach(article -> news.add(new Article(
                                article.getSource().getCategory(),
                                article.getTitle(),
                                article.getAuthor(),
                                article.getDescription(),
                                article.getUrlToImage(),
                                article.getSource().getName(),
                                article.getPublishedAt()
                        )));
                        future.complete(new PageImpl<Article>(news, pageable, response.getTotalResults()));
                    }

                    @Override
                    public void onFailure(Throwable throwable) {
                        future.completeExceptionally(throwable);
                    }
                }
        );
        try {
            return future.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException("error fetching data", e);
        }

    }

    @Override
    public List<Article> getHeadlines() {
        CompletableFuture<List<Article>> future = new CompletableFuture<>();
        newsApiClient.getTopHeadlines(
                new TopHeadlinesRequest.Builder()
                        .q("Tunisia")
                        .build(),
                new NewsApiClient.ArticlesResponseCallback() {
                    @Override
                    public void onSuccess(ArticleResponse response) {
                        List<Article> news = new ArrayList<>();
                        response.getArticles().forEach(article -> news.add(new Article(
                                article.getSource().getCategory(),
                                article.getTitle(),
                                article.getAuthor(),
                                article.getDescription(),
                                article.getUrlToImage(),
                                article.getSource().getName(),
                                article.getPublishedAt()
                        )));
                        future.complete(news);
                    }

                    @Override
                    public void onFailure(Throwable throwable) {
                        future.completeExceptionally(throwable);
                    }
                }
        );

        try {
            return future.get();
        } catch (InterruptedException | ExecutionException e) {
            throw new RuntimeException("error fetching data", e);
        }
    }

    @Override
    public List<Source> getSources() {
        CompletableFuture<List<Source>> future = new CompletableFuture<>();

        newsApiClient.getSources(
                new SourcesRequest.Builder()
                        .country("us")
                        .build(),
                new NewsApiClient.SourcesCallback() {
                    @Override
                    public void onSuccess(SourcesResponse response) {
                        List<Source> sources = new ArrayList<>();
                        response.getSources().forEach(source -> sources.add(new Source(
                                source.getId(),
                                source.getName(),
                                source.getDescription(),
                                source.getUrl(),
                                source.getCategory(),
                                source.getLanguage()
                        )));
                        future.complete(sources);
                    }

                    @Override
                    public void onFailure(Throwable throwable) {
                        future.completeExceptionally(throwable);
                    }
                }
        );

        try {
            return future.get();
        } catch (InterruptedException | ExecutionException e) {
            Thread.currentThread().interrupt(); // Restore interrupt status
            throw new RuntimeException("Error fetching data", e);
        }
    }
}
