const scriptURL = 'https://script.google.com/macros/s/AKfycbwLxfi_n2iT9a5yFvqh9mYtXpt-vH2OQL5XUmAIwGYKsKa_kQqPFock_FyKKOGIu8uaMQ/exec';
const form = document.forms['rahman-contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  // Ketika tombol submit diklik
  // tampilkan tombol loading, hilangkan tombol kirim

  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      // tampilkan alert
      myAlert.classList.toggle('d-none');
     //  reset formnya
      form.reset();
      console.log('Success!', response)
    })
    .catch((error) => console.error('Error!', error.message))
});


const testimonials = [
  {
    name: "~ Sandhika Galih ~",
    quotext: "Jangan Lupa Titik Koma.",
  },
  {
    name: "~ Narenda Wicaksono ~",
    quotext: "Teknologi apapun itu kamu PASTI BISA mempelajarinya. Tapi ingat, tiada yang instan dalam belajar. Butuh proses dan pengorbanan.",
  },
  {
    name: "~ Nadiem Makarim ~",
    quotext: "Teknologilah yang bisa memberikan dampak sosial terbesar di negara ini. Bukan kebijakan atau policy.",
  }
];

const textEl = document.querySelector(".quotext");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
  const { name, quotext } = testimonials[idx];
  textEl.innerText = quotext;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 7000);
}
