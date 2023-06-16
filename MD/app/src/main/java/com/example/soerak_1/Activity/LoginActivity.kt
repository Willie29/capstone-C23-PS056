package com.example.soerak_1.Activity//package com.example.soerak_1
//
//import android.content.Intent
//import android.os.Bundle
//import android.widget.Toast
//import androidx.appcompat.app.AppCompatActivity
//import com.example.soerak_1.databinding.ActivityLoginBinding
//
//class LoginActivity : AppCompatActivity() {
//
//    private lateinit var binding: ActivityLoginBinding
//
//    override fun onCreate(savedInstanceState: Bundle?) {
//        super.onCreate(savedInstanceState)
//        supportActionBar?.hide()
//        binding = ActivityLoginBinding.inflate(layoutInflater)
//        setContentView(binding.root)
//
//        binding.btnSignup.setOnClickListener {
//            startActivity(Intent(this, MainActivity::class.java))
//        }
//
//        binding.buttonLogin.setOnClickListener {
//            val username = binding.usernameEdittext.text.toString()
//            val password = binding.passwordEdittext.text.toString()
//
//            if (performLogin(username, password)) {
//                val intent = Intent(this, MainActivity::class.java)
//                startActivity(intent)
//                finish()
//            } else {
//                Toast.makeText(this, "Login failed. Please try again.", Toast.LENGTH_SHORT).show()
//            }
//        }
//    }
//}
//
//private fun performLogin(username: String, password: String): Boolean {
//    // Perform login verification here
//    // Return true if login is successful, false otherwise
//
//}