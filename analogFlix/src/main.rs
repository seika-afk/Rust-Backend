use axum::{routing::get, Router};
use dotenv::dotenv;
use std::env;

use tower_http::{cors::CorsLayer, services::ServeDir};

mod handlers;
mod state;
mod models;


use state::AppState;
use handlers::{root, get_video, get_trending, search_content};


#[tokio::main]
async fn main() {
    dotenv().ok();

    let api_key = env::var("api_key").expect("API KEY must be set");
    let state = AppState {
        api_key,
        client: reqwest::Client::new(),
    };

    let cors = CorsLayer::new().allow_origin(tower_http::cors::Any);

    let app: Router = Router::new()
        .route("/", get(root))
        .route("/api/trending", get(get_trending))
        .route("/api/search", get(search_content))
        .route("/api/video/{id}/videos", get(get_video))
        .nest_service("/stream", ServeDir::new("assets"))
        .layer(cors)
        .with_state(state);

    let listener = tokio::net::TcpListener::bind("0.0.0.0:0000").await.unwrap()
;
    println!("Server listening on http://{}",listener.local_addr().unwrap());

    axum::serve(listener, app).await.unwrap();}
