
use axum::{extract::{Path,Query,State},Json};

use crate::models::{ApiResponse, SearchQuery, VideoDetailsResponse};
use crate::state::AppState;



pub async fn root()-> &'static str{
        "Analogflix Backend is Online"
}


//write handler for getting query/s ApiResponse
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=analog+horror&type=video&order=viewCount&maxResults=10&key=YOUR_API_KEY


pub  async fn search_content(
    State(state):State<AppState>,
    Query(params):Query<SearchQuery>
)->Json<ApiResponse>{

    let page_token = params.page.unwrap_or_default();

    let url = if page_token.is_empty() {
        format!(
            "https://www.googleapis.com/youtube/v3/search?part=snippet&q={}&maxResults=10&type=video&key={}",
            params.query,
            state.api_key
        )
    } else {
        format!(
            "https://www.googleapis.com/youtube/v3/search?part=snippet&q={}&maxResults=10&type=video&pageToken={}&key={}",
            params.query,
            page_token,
            state.api_key
        )
    };

    let res = state.client.get(&url).send().await.unwrap().json::<ApiResponse>().await.unwrap();

    Json(res)


}


pub async fn get_trending(
    State(state):State<AppState>
)->Json<ApiResponse>{
let url = format!(
"https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=analog horror VHS tape ARG film&videoDuration=medium&videoEmbeddable=true&maxResults=25&key={}",
state.api_key
);
    let res= state.client.get(&url).send().await.unwrap().json::<ApiResponse>().await.unwrap();
    Json(res)



}


pub async fn get_video(
    State(state):State<AppState>,
    Path(id):Path<String>
)->Json<VideoDetailsResponse>{
    let url = format!(
"https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id={}&key={}",
        id,
        state.api_key


);
    let res = state.client.get(&url).send().await.unwrap().json::<VideoDetailsResponse>().await.unwrap();

    Json(res)

}
