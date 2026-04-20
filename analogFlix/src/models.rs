use serde::{Deserialize, Serialize};

//////// MAIN

#[derive(Deserialize, Serialize, Debug)]
pub struct ApiResponse{
pub items: Vec<Video>,

}


//////// DETAILS


#[derive(Deserialize, Serialize, Debug)]
pub struct Id{

    #[serde(rename="videoId")]
    pub video_id:String
}


#[derive(Deserialize, Serialize, Debug)]
pub struct Video{
    pub id:Id,
    pub snippet:Snippet,
    #[serde(rename = "statistics")]
    pub statistics:Option<Stats>



}

// SNIPPET

#[derive(Deserialize, Serialize, Debug)]
pub struct Snippet {
    #[serde(rename = "publishedAt")]
    pub published_at: String,

    pub title: Option<String>,
    pub description: Option<String>,

    #[serde(rename = "channelTitle")]
    pub channel_title: Option<String>,

    pub thumbnails: Option<Thumbnails>,
}


// THUMBNAILS
#[derive(Deserialize, Serialize, Debug)]
pub struct Thumbnails{
   pub default: Option<Thumbnail>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct Thumbnail {
    pub url: Option<String>,
    pub width: Option<i32>,
    pub height: Option<i32>,
}

// STATS 
#[derive(Deserialize, Serialize, Debug)]
pub struct Stats{

    #[serde(rename="viewCount")]
    pub view_count :Option<String>,


    #[serde(rename="likeCount")]
    pub like_count :Option<String>,





}

#[derive(Deserialize, Serialize, Debug)]
pub struct SearchQuery{
    pub query:String,
    pub page: Option<String>

}

#[derive(Deserialize, Serialize, Debug)]
pub struct VideoDetailsResponse {
    pub items: Vec<VideoDetails>,
}

#[derive(Deserialize, Serialize, Debug)]
pub struct VideoDetails {
    pub id: String,
    pub snippet: Snippet,
    #[serde(rename = "statistics")]
    pub statistics: Option<Stats>,


}
