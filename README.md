# Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?


	- getElementById: স্পেসিফিক ভাবে একটি এলিমেন্টকে সিলেক্ট করে।
	- getElementsByClassName : একই নামের ক্লাস থাকা সকল এলিমেন্টকে সিলেক্ট করে এবং HTMLCollection রিটার্ন করে।
	- querySelector/ querySelectorAll: ক্লাস(.)/আইডি(#) উভয় দিয়ে একাধিক এলিমেন্ট/নেস্টেড নোড থেকে এলিমেন্ট সিলেক্ট করা যায় যা NodeList রিটার্ন করে।


### 2. How do you create and insert a new element into the DOM?

	- doccument.createElement দিয়ে একটি এলিমেন্ট ক্রিয়েট করে সেটা ভ্যারিয়েবলে রাখব,তার মধ্যে কনটেন্ট ইন্সার্ট করব, তারপর সেটিকে কনটেইনারের/প্যারেন্ট নোডে appendChild(child) করব।

### 3. What is Event Bubbling? And how does it work?
	
	- যখন কোনো একটা চাইল্ড এলিমেন্টে কোনো ইভেন্ট ট্রিগার হয় , তখন সেটি তার প্যারেন্ট থেকে উপরের প্যারেন্টের/রুটের দিকে বাবল করে, এটি হলো Event Bubbling । 

### 4. What is Event Delegation in JavaScript? Why is it useful?

	- চাইল্ড ইলিমেন্টে কোনো ইভেট ট্রিগার হলে , তা বাবলিং এর কারনে তার প্যারেন্ট পর্যন্ত যায় , এটি ব্যাবহার করে আমরা সরাররি প্যারেন্টে ইভেন্ট লিসেনার ব্যবহার করতে পারি। ফলে কোন চাইল্ডে ইভেন্ট হলো , সেটি প্যারেন্ট ট্র্যাক করতে পারে। একে ইভেন্ট ডেলিগেশন বলে। 
	
	এটি ব্যাবহারের সুবিধা হলোঃ একাধিক চাইল্ড থাকলে সবার জন্য আলাদা ইভেন্ট লিসেনার লাগে না। প্যারেন্টে একটি লিসেনার ব্যবহার করেই কাজ করে ফেলা যায়।

### 5. What is the difference between preventDefault() and stopPropagation() methods?

	- ইভেন্টের কিছু ডিফল্ট বিহ্যাভিয়ার আছে,যেটিকে থামানোর জন্য preventDefault() ব্যবহার করা হয়।

	অন্যদিকে, ইভেন্ট বাবলিং কে একটি নির্দিষ্ট নোড পর্যন্ত থামিয়ে দিতে stopPropagation() ব্যবহার করা হয়।
---

