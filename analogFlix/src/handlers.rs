
use axum::{extract::{Path,Query,State},Json};

use crate::model::{ApiResponse,Video,PageQuery,SearchQuery};
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
