package com.example.soerak_1.Data.Request.Response

import com.google.gson.annotations.SerializedName

data class PostResponse(

    @SerializedName("post_id")
    val postId: String,
    @SerializedName("user_id")
    val userId: String,
    val category: String,
    val caption: String,
    @SerializedName("image_url")
    val imageUrl: String,
    val createdAt: String,
    val vote: Int
)

