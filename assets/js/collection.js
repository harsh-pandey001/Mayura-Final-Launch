const arg = new URLSearchParams(window.location.search).get("arg");
// Modify the content of the page based on the argument value
if (arg === "value1") {
    document.getElementsByClassName("container")[0].innerHTML = `<div class="carousel">
    <input type="radio" name="slides" checked="checked" id="slide-1" />
    <input type="radio" name="slides" id="slide-2" />
    <input type="radio" name="slides" id="slide-3" />
    <input type="radio" name="slides" id="slide-4" />
    <input type="radio" name="slides" id="slide-5" />
    <input type="radio" name="slides" id="slide-6" />
    <input type="radio" name="slides" id="slide-7" />
    <input type="radio" name="slides" id="slide-8" />
    <input type="radio" name="slides" id="slide-9" />
    <input type="radio" name="slides" id="slide-10" />
    <ul class="carousel__slides">
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/1.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Tim Marshall</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/2.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Christian Joudrey</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/3.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Steve Carter</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/4.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Aleksandra Boguslawska</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/5.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Rosan Harmens</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/6.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/7.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/16x16 plain/8.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/9.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img id = ""src="./assets/plain/16x16 plain/10.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
    </ul>
    <ul class="carousel__thumbnails">
      <li>
        <label for="slide-1"
          ><img id = ""src="./assets/plain/16x16 plain/1.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-2"
          ><img id = ""src="./assets/plain/16x16 plain/2.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-3"
          ><img id = ""src="./assets/plain/16x16 plain/3.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-4"
          ><img id = ""src="./assets/plain/16x16 plain/4.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-5"
          ><img id = ""src="./assets/plain/16x16 plain/5.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-6"
          ><img id = ""src="./assets/plain/16x16 plain/6.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-7"
          ><img id = ""src="./assets/plain/16x16 plain/7.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-8"
          ><img id = ""src="./assets/plain/16x16 plain/8.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-9"
          ><img id = ""src="./assets/plain/16x16 plain/9.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-10"
          ><img id = ""src="./assets/plain/16x16 plain/10.jpg" alt=""
        /></label>
      </li>
    </ul>
  </div>`
//  document.getElementsByTagName("input").setAttribute("id","slide-21");
//   var val1 = document.getElementsByTagName("input").innerHTMl
//    val1.inn = "./assets/Pamplate/Living Room.jpg";
} else if (arg === "value2") {

document.getElementsByClassName("container")[0].innerHTML = ` <div class="carousel">
<input type="radio" name="slides" checked="checked" id="slide-11" />
<input type="radio" name="slides" id="slide-12" />
<input type="radio" name="slides" id="slide-13" />
<input type="radio" name="slides" id="slide-14" />
<input type="radio" name="slides" id="slide-15" />
<input type="radio" name="slides" id="slide-16" />
<input type="radio" name="slides" id="slide-17" />
<input type="radio" name="slides" id="slide-18" />
<ul class="carousel__slides">
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/1.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Tim Marshall</span>
      </figcaption>
    </figure>
  </li>
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/2.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Christian Joudrey</span>
      </figcaption>
    </figure>
  </li>
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/3.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Steve Carter</span>
      </figcaption>
    </figure>
  </li>
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/4.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Aleksandra Boguslawska</span>
      </figcaption>
    </figure>
  </li>
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/5.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Rosan Harmens</span>
      </figcaption>
    </figure>
  </li>
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/6.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Annie Spratt</span>
      </figcaption>
    </figure>
  </li>
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/7.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Annie Spratt</span>
      </figcaption>
    </figure>
  </li>
  <li class="carousel__slide">
    <figure>
      <div>
        <img src="./assets/plain/16x16 Punch/8.jpg" alt="" />
      </div>
      <figcaption>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        <span class="credit">Photo: Annie Spratt</span>
      </figcaption>
    </figure>
  </li>
</ul>
<ul class="carousel__thumbnails">
  <li>
    <label for="slide-11"
      ><img src="./assets/plain/16x16 Punch/1.jpg" alt=""
    /></label>
  </li>
  <li>
    <label for="slide-12"
      ><img src="./assets/plain/16x16 Punch/2.jpg" alt=""
    /></label>
  </li>
  <li>
    <label for="slide-13"
      ><img src="./assets/plain/16x16 Punch/3.jpg" alt=""
    /></label>
  </li>
  <li>
    <label for="slide-14"
      ><img src="./assets/plain/16x16 Punch/4.jpg" alt=""
    /></label>
  </li>
  <li>
    <label for="slide-15"
      ><img src="./assets/plain/16x16 Punch/5.jpg" alt=""
    /></label>
  </li>
  <li>
    <label for="slide-16"
      ><img src="./assets/plain/16x16 Punch/6.jpg" alt=""
    /></label>
  </li>
  <li>
    <label for="slide-17"
      ><img src="./assets/plain/16x16 Punch/7.jpg" alt=""
    /></label>
  </li>
  <li>
    <label for="slide-18"
      ><img src="./assets/plain/16x16 Punch/8.jpg" alt=""
    /></label>
  </li>
</ul>
</div>`
} else {
    document.getElementsByClassName("container")[0].innerHTML = `<div class="carousel">
    <input type="radio" name="slides" checked="checked" id="slide-21" />
    <input type="radio" name="slides" id="slide-22" />
    <input type="radio" name="slides" id="slide-23" />
    <input type="radio" name="slides" id="slide-24" />
    <input type="radio" name="slides" id="slide-25" />
    <input type="radio" name="slides" id="slide-26" />
    <input type="radio" name="slides" id="slide-27" />
    <input type="radio" name="slides" id="slide-28" />
    <input type="radio" name="slides" id="slide-29" />
    <input type="radio" name="slides" id="slide-30" />
    <input type="radio" name="slides" id="slide-31" />
    <input type="radio" name="slides" id="slide-32" />
    <input type="radio" name="slides" id="slide-33" />
    <ul class="carousel__slides">
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/1.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Tim Marshall</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/2.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Christian Joudrey</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/3.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Steve Carter</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/4.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Aleksandra Boguslawska</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/5.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Rosan Harmens</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/6.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/7.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/8.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/9.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/10.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/11.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/12.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
      <li class="carousel__slide">
        <figure>
          <div>
            <img src="./assets/plain/24x24 Carving/13.jpg" alt="" />
          </div>
          <figcaption>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <span class="credit">Photo: Annie Spratt</span>
          </figcaption>
        </figure>
      </li>
    </ul>
    <ul class="carousel__thumbnails">
      <li>
        <label for="slide-21"
          ><img src="./assets/plain/24x24 Carving/1.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-22"
          ><img src="./assets/plain/24x24 Carving/2.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-23"
          ><img src="./assets/plain/24x24 Carving/3.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-24"
          ><img src="./assets/plain/24x24 Carving/4.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-25"
          ><img src="./assets/plain/24x24 Carving/5.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-26"
          ><img src="./assets/plain/24x24 Carving/6.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-27"
          ><img src="./assets/plain/24x24 Carving/7.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-28"
          ><img src="./assets/plain/24x24 Carving/8.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-29"
          ><img src="./assets/plain/24x24 Carving/9.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-30"
          ><img src="./assets/plain/24x24 Carving/10.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-31"
          ><img src="./assets/plain/24x24 Carving/11.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-32"
          ><img src="./assets/plain/24x24 Carving/12.jpg" alt=""
        /></label>
      </li>
      <li>
        <label for="slide-33"
          ><img src="./assets/plain/24x24 Carving/13.jpg" alt=""
        /></label>
      </li>
    </ul>
  </div>`
}