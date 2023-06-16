package com.example.soerak_1.Activity//package com.example.soerak_1
//
//import android.content.Intent
//import androidx.appcompat.app.AppCompatActivity
//import android.os.Bundle
//import com.example.soerak_1.databinding.ActivitySignupBinding
//
//class SignUpActivity : AppCompatActivity() {
//    private lateinit var binding: ActivitySignupBinding
//
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        supportActionBar?.hide()
//        binding = ActivitySignupBinding.inflate(layoutInflater)
//        setContentView(binding.root)
//
//        binding.btnBack.setOnClickListener {
//            startActivity(Intent(this, LoginActivity::class.java))
//        }
//    }
//}