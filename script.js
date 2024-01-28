{/* */}

const bitkilerDivi = document.querySelector("#bitkiler-divi")

// console.log(bitkilerDivi) biz bunu test ucun yaziriq

window.addEventListener('DOMContentLoaded', getBitkileriGetir)

// 

async function getBitkileriGetir() {

    const unvan = "https://fakestoreapi.com/products"

    try {
        const cavab = await fetch(unvan)
        console.log(cavab)
        const frontendeGelecekMelumatlar = await cavab.json()

        console.log(frontendeGelecekMelumatlar)

        for( let i=0; i<20; i++) {
            bitkilerDivi.innerHTML += `
            <div class="col-12 col-md-6 col-lg-3">
<div class="card mb-4">
    <img src="${frontendeGelecekMelumatlar[i].image}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title text-center text-secondary-emphasis fw-lighter">Sit voluptatem</h5>
     <span class="text-center d-block fw-bold">68.00 &#8380;</span>
    </div>
  </div>
</div> 
            `
        }
    }

    catch(xeta) {
        console.log("Xetanin sebebi" + xeta)
    }
}


