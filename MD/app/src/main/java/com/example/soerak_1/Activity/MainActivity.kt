package com.example.soerak_1.Activity

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import androidx.fragment.app.Fragment
import com.example.soerak_1.Fragment.CreatePostFragment
import com.example.soerak_1.Fragment.ProfileFragment
import com.example.soerak_1.Fragment.TimelineFragment
import com.example.soerak_1.R
import com.example.soerak_1.databinding.ActivityMainBinding


class MainActivity : AppCompatActivity() {
    private lateinit var binding: ActivityMainBinding


    private fun replaceFragment(fragment: Fragment) {
        val fragmentManager = supportFragmentManager
        val fragmentTransaction = fragmentManager.beginTransaction()
        fragmentTransaction.replace(R.id.frame_layout, fragment)
        fragmentTransaction.commit()
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        supportFragmentManager.beginTransaction()
            .add(R.id.frame_layout, TimelineFragment())
            .commit()

            //Navigation
            replaceFragment(TimelineFragment())
            binding.bottomNavigationView.setOnItemSelectedListener {
                when (it.itemId) {
                    R.id.timeline -> replaceFragment(TimelineFragment())
                    R.id.profile -> replaceFragment(ProfileFragment())
                    R.id.create_post -> replaceFragment(CreatePostFragment())
                }

                true
            }

            //Hide ActionBar
            supportActionBar?.hide()

            //RecyclerView Timeline


        }

    }

