package com.example.soerak_1.Fragment

import android.os.Parcelable
import kotlinx.parcelize.Parcelize

@Parcelize
data class Timeline(
    val caption: String,
    val photo: Int
) : Parcelable