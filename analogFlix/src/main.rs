use axum::{routing::get, Router};
use dotenv::dotenv;
use std::{env, net::SocketAddr};

use tower_http::{cors::CorsLayer, services::ServeDir};

mod handlers;
mod state;
mod models;


use state::AppState;
use handlers::{root, get_video, get_trending, search_content};


#[tokio::main]
async fn main() {
    dotenv().ok();

    let api_key = env::var("api_key")
        .or_else(|_| env::var("API_KEY"))
        .expect("API key must be set as `api_key` or `API_KEY`");
    let port = env::var("PORT")
        .ok()
        .and_then(|value| value.parse::<u16>().ok())
        .unwrap_or(8000);
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

    let addr = SocketAddr::from(([0, 0, 0, 0], port));
    let listener = tokio::net::TcpListener::bind(addr).await.unwrap();
    println!("Server listening on http://{}",listener.local_addr().unwrap());

    axum::serve(listener, app).await.unwrap();}
