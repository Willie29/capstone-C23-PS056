package com.example.soerak_1.Fragment

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.ArrayAdapter
import androidx.fragment.app.Fragment
import com.example.soerak_1.R
import com.example.soerak_1.databinding.FragmentCreatePostBinding

class CreatePostFragment : Fragment() {
    private lateinit var binding: FragmentCreatePostBinding

    override fun onCreateView(
        inflater: LayoutInflater,
        container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        binding = FragmentCreatePostBinding.inflate(inflater, container, false)

        val items = listOf("Kritik", "Saran", "Aspirasi", "Pengaduan")
        val adapter = ArrayAdapter(requireContext(), R.layout.list_kategori, items)
        binding.dropdownKategori.setAdapter(adapter)

        return binding.root

    }


}