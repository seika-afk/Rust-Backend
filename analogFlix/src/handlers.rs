
use axum::{extract::{Path,Query,State},Json};

use crate::model::{ApiResponse,Video,PageQuery,SearchQuery};
use crate::state::AppState;



pub async fn root()-> &'static str{
        "Anlogflix Backend is Online"
}


//write handler for getting query/s ApiResponse
