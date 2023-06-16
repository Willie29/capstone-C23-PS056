package com.example.soerak_1.Data.Request

import com.example.soerak_1.Data.Request.Response.CreatePostResponse
import com.example.soerak_1.Data.Request.Response.PostResponse
import retrofit2.Call
import retrofit2.http.Field
import retrofit2.http.FormUrlEncoded
import retrofit2.http.GET
import retrofit2.http.POST


interface ApiService {

    @GET("post/bydate")
    fun get_post(): Call<ArrayList<PostResponse>>

    @FormUrlEncoded
    @POST("post/bydate")
    fun InsertCreatePost(
        @Field("caption") caption: String,
        @Field("category") category: String,
    ): Call<CreatePostResponse>

}