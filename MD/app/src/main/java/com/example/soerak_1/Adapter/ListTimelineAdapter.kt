package com.example.soerak_1.Adapter

import android.annotation.SuppressLint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ImageView
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.soerak_1.Data.Request.Response.PostResponse
import com.example.soerak_1.Fragment.TimelineFragment
import com.example.soerak_1.R
import com.squareup.picasso.Picasso


class ListTimelineAdapter(
    private val context: TimelineFragment,
    private val dataList: ArrayList<PostResponse>
): RecyclerView.Adapter<ListTimelineAdapter.ListViewHolder>() {
    class ListViewHolder(private val view: View): RecyclerView.ViewHolder(view) {
        val tvKategori = view.findViewById<TextView>(R.id.tv_kategori)
        val tvCaption = view.findViewById<TextView>(R.id.tv_caption)
        val tvVote = view.findViewById<TextView>(R.id.jumlah_vote)
        val tvUser = view.findViewById<TextView>(R.id.textView3)
        val tvImage = view.findViewById<ImageView>(R.id.imageView1)
//        val cvTimeline = view.findViewById<CardView>(R.id.card_view)

    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ListViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        val itemView = layoutInflater.inflate(R.layout.item_row_timeline, parent, false)

        return ListViewHolder(itemView)
    }

    override fun getItemCount(): Int = dataList.size

    @SuppressLint("NotifyDataSetChanged")
    fun setData(data: ArrayList<PostResponse>){
        dataList.clear()
        dataList.addAll(data)
        notifyDataSetChanged()
    }

    override fun onBindViewHolder(holder: ListViewHolder, position: Int) {
        holder.tvKategori.text = dataList[position].category
        holder.tvCaption.text = dataList[position].caption
        holder.tvVote.text = dataList[position].vote.toString()
        holder.tvUser.text = dataList[position].userId
        val imageUrl = dataList[position].imageUrl
        Picasso.get()
            .load(imageUrl)
            .into(holder.tvImage)

        }
    }
