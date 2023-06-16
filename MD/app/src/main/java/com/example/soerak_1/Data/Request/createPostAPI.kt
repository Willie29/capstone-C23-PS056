package com.example.soerak_1.Data.Request

import com.example.soerak_1.Data.Request.Response.CreatePostResponse
import com.example.soerak_1.Data.Request.Response.PostRequest
import retrofit2.Call
import retrofit2.http.Body
import retrofit2.http.FormUrlEncoded
import retrofit2.http.POST

interface createPostAPI {
    @FormUrlEncoded
    @POST("post/bydate")
    fun create_Post(@Body req: PostRequest): Call<CreatePostResponse>
}