package com.example.soerak_1.Fragment

import android.os.Bundle
import android.util.Log
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.recyclerview.widget.LinearLayoutManager
import com.example.soerak_1.Adapter.ListTimelineAdapter
import com.example.soerak_1.Data.Request.Response.PostResponse
import com.example.soerak_1.Data.Request.Response.RetrofitClient
import com.example.soerak_1.databinding.FragmentTimelineBinding
import retrofit2.Call
import retrofit2.Response


class TimelineFragment : Fragment() {
    private lateinit var binding: FragmentTimelineBinding
    private lateinit var adapter: ListTimelineAdapter

    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentTimelineBinding.inflate(inflater, container, false)
        return binding.root
    }


    override fun onViewCreated(view: View, savedInstanceState: Bundle?) {
        super.onViewCreated(view, savedInstanceState)

        val layoutManager = LinearLayoutManager(requireContext())
        binding.rvTimeline.layoutManager = layoutManager

        adapter = ListTimelineAdapter(this, arrayListOf())

        binding.rvTimeline.adapter = adapter
        binding.rvTimeline.setHasFixedSize(true)

        remoteGetUsers()
    }


//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//
//        binding = FragmentTimelineBinding.inflate(layoutInflater)
//
//        adapter = ListTimelineAdapter(this, arrayListOf())
//
//        binding.rvTimeline.adapter = adapter
//        binding.rvTimeline.setHasFixedSize(true)
//
//        remoteGetUsers()
//    }

    private fun remoteGetUsers(){
        RetrofitClient.apiService.get_post().enqueue(object : retrofit2.Callback<ArrayList<PostResponse>> {
            override fun onResponse(
                call: Call<ArrayList<PostResponse>>,
                response: Response<ArrayList<PostResponse>>
            ) {
                if (response.isSuccessful) {
                    val data = response.body()
                    setDataToAdapter(data!!)
                }

            }

            override fun onFailure(call: Call<ArrayList<PostResponse>>, t: Throwable) {
                Log.d("Error", "" + t.stackTraceToString())
            }
        })

    }
    fun setDataToAdapter(data: ArrayList<PostResponse>) {
        adapter.setData(data)
    }

}

