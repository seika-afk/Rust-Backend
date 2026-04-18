use axum::{routing::get, Router};
use dotenv::dotenv;
use std::env;

use tokio::net::TcpListener;
use tower_http::{cors::CorsLayer, services::ServeDir};

mod handlers;
mod state;
mod models;


use state::AppState;
use handlers::{root, get_video, get_trending, search_content};
