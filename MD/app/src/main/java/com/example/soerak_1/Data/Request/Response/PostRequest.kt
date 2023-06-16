package com.example.soerak_1.Data.Request.Response

import com.google.gson.annotations.Expose
import com.google.gson.annotations.SerializedName

data class PostRequest(
    @SerializedName("caption")
    @Expose
    val caption: String,

    @SerializedName("category")
    @Expose
    val category: String,

    @SerializedName("image_url")
    @Expose
    val image_url: String

)
