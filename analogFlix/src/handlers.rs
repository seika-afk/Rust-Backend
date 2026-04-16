
use axum::{extract::{Path,Query,State},Json};

use crate::model::{ApiResponse,Video,PageQuery,SearchQuery};
use crate::state::AppState;



pub async fn root()-> &'static str{
        "Anlogflix Backend is Online"
}


//write handler for getting query/s ApiResponse
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=analog+horror&type=video&order=viewCount&maxResults=10&key=YOUR_API_KEY
