
use axum::{extract::{Path,Query,State},Json};

use crate::models::{ApiResponse, Video, PageQuery, SearchQuery};
use crate::state::AppState;



pub async fn root()-> &'static str{
        "Anlogflix Backend is Online"
}


//write handler for getting query/s ApiResponse
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=analog+horror&type=video&order=viewCount&maxResults=10&key=YOUR_API_KEY


pub  async fn search_content(
    State(state):State<AppState>,
    Query(params):Query<SearchQuery>
)->Json<ApiResponse>{

    let page:i32 = params.unwrap_or(1);

    let url = format!(
        "https://www.googleapis.com/youtube/v3/search?part=snippet&q={}&maxResults=10&type=video&key={}",
        params.query,
        state.api_key
    );

    let res = state.client.get(&url).send().await.unwrap().json::<ApiResponse>().await.unwrap();

Json(res)


}


pub async fn get_trending(
    State(state):State<AppState>
)->Json<ApiResponse>{
let url = format!(
    "https://www.googleapis.com/youtube/v3/search?part=snippet&q=analog+horror+movies&type=video&order=viewCount&publishedAfter=2024-01-01T00:00:00Z&maxResults=10&key={}",
    state.api_key
);
    let res= state.client.get(&url).send().await.unwrap().json::<ApiResponse>().await.unwrap();
    Json(res)



}


pub async fn get_video(
    State(state):State<AppState>,
    Path(id):Path<i32>
)->Json<Video>{
    let url = format!(
"https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id={}&key={}",
        id,
        state.api_key


);
    let res = state.client.get(&url).send().await.unwrap().json::<Video>().await.unwrap();

    Json(res)

}
