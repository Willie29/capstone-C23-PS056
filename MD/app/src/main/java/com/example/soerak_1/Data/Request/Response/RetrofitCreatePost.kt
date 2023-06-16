package com.example.soerak_1.Data.Request.Response

import com.example.soerak_1.Data.Request.ApiService
import com.google.gson.Gson
import com.google.gson.GsonBuilder
import okhttp3.OkHttpClient
import okhttp3.logging.HttpLoggingInterceptor
import retrofit2.Retrofit
import retrofit2.converter.gson.GsonConverterFactory
import java.util.concurrent.TimeUnit

object RetrofitCreatePost {
    private fun getInterceptor(): OkHttpClient {
        val logging = HttpLoggingInterceptor()
        logging.apply {
            logging.level = HttpLoggingInterceptor.Level.BODY
        }
        return OkHttpClient.Builder()
            .retryOnConnectionFailure(true)
            .readTimeout(30, TimeUnit.SECONDS)
            .writeTimeout(5, TimeUnit.MINUTES)
            .connectTimeout(10, TimeUnit.MINUTES)
            .addInterceptor(logging)
            .build()
    }

    private fun initGson(): Gson {
        return GsonBuilder().setLenient().create()
    }

    const val BASE_URL = "https://backend-dot-sorak-c23-ps056.et.r.appspot.com/"

    fun getRetrofit() : Retrofit {
        return Retrofit.Builder()
            .baseUrl(BASE_URL)
            .addConverterFactory(GsonConverterFactory.create(initGson()))
            .client(getInterceptor())
            .build()

    }

    fun getService(): ApiService{
        return getRetrofit().create(ApiService::class.java)
    }
}