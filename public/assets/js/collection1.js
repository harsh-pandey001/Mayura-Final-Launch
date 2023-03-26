const arg = new URLSearchParams(window.location.search).get("arg");
// Modify the content of the page based on the argument value
if (arg === "value3") {
  document.getElementsByClassName(
    "container69"
  )[0].innerHTML = `<div class="carousel">
    <input type="radio" name="slides" checked="checked" id="slide-1">
    <input type="radio" name="slides" id="slide-2">
    <input type="radio" name="slides" id="slide-3">
    <input type="radio" name="slides" id="slide-4">
    <input type="radio" name="slides" id="slide-5">
    <input type="radio" name="slides" id="slide-6">
    <input type="radio" name="slides" id="slide-7">
    <input type="radio" name="slides" id="slide-8">
    <input type="radio" name="slides" id="slide-9">
    <input type="radio" name="slides" id="slide-10">
    <ul class="carousel__slides">
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content; " src="../plain/16x16 plain/1.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3001</span>
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/2.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3002</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/3.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3005</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/4.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3011</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/5.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3012</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/6.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3033</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/7.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES.
                    <span class="credit">Design no:- 3062</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/8.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3082</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/9.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3205</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img style = "width: fit-content;" src="../plain/16x16 plain/10.jpg" alt="">
                </div>
                <figcaption>
                    16x16 HEAVY DUTY PARKING TILES
                    <span class="credit">Design no:- 3250</span>                            
                </figcaption>
            </figure>
        </li>

    </ul>    
    <ul class="carousel__thumbnails">
        <li>
            <label for="slide-1"><img style = "width: fit-content;" src="../plain/16x16 plain/1.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-2"><img style = "width: fit-content;" src="../plain/16x16 plain/2.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-3"><img style = "width: fit-content;" src="../plain/16x16 plain/3.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-4"><img style = "width: fit-content;" src="../plain/16x16 plain/4.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-5"><img style = "width: fit-content;" src="../plain/16x16 plain/5.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-6"><img style = "width: fit-content;" src="../plain/16x16 plain/6.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-7"><img style = "width: fit-content;" src="../plain/16x16 plain/7.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-8"><img style = "width: fit-content;" src="../plain/16x16 plain/8.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-9"><img style = "width: fit-content;" src="../plain/16x16 plain/9.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-10"><img style = "width: fit-content;" src="../plain/16x16 plain/10.jpg" alt=""></label>
        </li>
        
    </ul>
</div>`;
  //  document.getElementsByTagName("input").setAttribute("id","slide-21");
  //   var val1 = document.getElementsByTagName("input").innerHTMl
  //    val1.inn = "./assets/Pamplate/Living Room.jpg";
}  else if (arg === "value2") {
  document.getElementsByClassName(
    "container69"
  )[0].innerHTML = `<div class="carousel">
<input type="radio" name="slides" checked="checked" id="slide-11">
<input type="radio" name="slides" id="slide-12">
<input type="radio" name="slides" id="slide-13">
<input type="radio" name="slides" id="slide-14">
<input type="radio" name="slides" id="slide-15">
<input type="radio" name="slides" id="slide-16">
<input type="radio" name="slides" id="slide-17">
<input type="radio" name="slides" id="slide-18">
<ul class="carousel__slides">
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 1011</span>
            </figcaption>
        </figure>
    </li>
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 2017</span>                            
            </figcaption>
        </figure>
    </li>
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 2026</span>                            
            </figcaption>
        </figure>
    </li>
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 2037</span>                            
            </figcaption>
        </figure>
    </li>
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 2051</span>                            
            </figcaption>
        </figure>
    </li>
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 2070</span>                            
            </figcaption>
        </figure>
    </li>
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 2075</span>                            
            </figcaption>
        </figure>
    </li>
    <li class="carousel__slide">
        <figure>
            <div>
                <img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt="">
            </div>
            <figcaption>
                16x16 HEAVY DUTY PARKING TILES PUNCH
                <span class="credit">Design no:- 2076</span>                            
            </figcaption>
        </figure>
    </li>
    </ul>    
<ul class="carousel__thumbnails">
    <li>
        <label for="slide-11"><img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt=""></label>
    </li>
    <li>
        <label for="slide-12"><img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt=""></label>
    </li>
    <li>
        <label for="slide-13"><img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt=""></label>
    </li>
    <li>
        <label for="slide-14"><img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt=""></label>
    </li>
    <li>
        <label for="slide-15"><img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt=""></label>
    </li>
    <li>
        <label for="slide-16"><img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt=""></label>
    </li>
    <li>
        <label for="slide-17"><img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt=""></label>
    </li>
    <li>
        <label for="slide-18"><img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt=""></label>
    </li>
</ul>
</div>`;
}

else if (arg === "value2") {
    document.getElementsByClassName(
      "container69"
    )[0].innerHTML = `<div class="carousel">
  <input type="radio" name="slides" checked="checked" id="slide-11">
  <input type="radio" name="slides" id="slide-12">
  <input type="radio" name="slides" id="slide-13">
  <input type="radio" name="slides" id="slide-14">
  <input type="radio" name="slides" id="slide-15">
  <input type="radio" name="slides" id="slide-16">
  <input type="radio" name="slides" id="slide-17">
  <input type="radio" name="slides" id="slide-18">
  <ul class="carousel__slides">
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 1011</span>
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2017</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2026</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2037</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2051</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2070</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2075</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2076</span>                            
              </figcaption>
          </figure>
      </li>
      </ul>    
  <ul class="carousel__thumbnails">
      <li>
          <label for="slide-11"><img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-12"><img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-13"><img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-14"><img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-15"><img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-16"><img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-17"><img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-18"><img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt=""></label>
      </li>
  </ul>
  </div>`;
  }
else if (arg === "value2") {
    document.getElementsByClassName(
      "container69"
    )[0].innerHTML = `<div class="carousel">
  <input type="radio" name="slides" checked="checked" id="slide-11">
  <input type="radio" name="slides" id="slide-12">
  <input type="radio" name="slides" id="slide-13">
  <input type="radio" name="slides" id="slide-14">
  <input type="radio" name="slides" id="slide-15">
  <input type="radio" name="slides" id="slide-16">
  <input type="radio" name="slides" id="slide-17">
  <input type="radio" name="slides" id="slide-18">
  <ul class="carousel__slides">
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 1011</span>
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2017</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2026</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2037</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2051</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2070</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2075</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2076</span>                            
              </figcaption>
          </figure>
      </li>
      </ul>    
  <ul class="carousel__thumbnails">
      <li>
          <label for="slide-11"><img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-12"><img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-13"><img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-14"><img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-15"><img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-16"><img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-17"><img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-18"><img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt=""></label>
      </li>
  </ul>
  </div>`;
  }
else if (arg === "value2") {
    document.getElementsByClassName(
      "container69"
    )[0].innerHTML = `<div class="carousel">
  <input type="radio" name="slides" checked="checked" id="slide-11">
  <input type="radio" name="slides" id="slide-12">
  <input type="radio" name="slides" id="slide-13">
  <input type="radio" name="slides" id="slide-14">
  <input type="radio" name="slides" id="slide-15">
  <input type="radio" name="slides" id="slide-16">
  <input type="radio" name="slides" id="slide-17">
  <input type="radio" name="slides" id="slide-18">
  <ul class="carousel__slides">
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 1011</span>
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2017</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2026</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2037</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2051</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2070</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2075</span>                            
              </figcaption>
          </figure>
      </li>
      <li class="carousel__slide">
          <figure>
              <div>
                  <img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt="">
              </div>
              <figcaption>
                  16x16 HEAVY DUTY PARKING TILES PUNCH
                  <span class="credit">Design no:- 2076</span>                            
              </figcaption>
          </figure>
      </li>
      </ul>    
  <ul class="carousel__thumbnails">
      <li>
          <label for="slide-11"><img style = "width: fit-content;" src="../plain/16x16 Punch/1.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-12"><img style = "width: fit-content;" src="../plain/16x16 Punch/2.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-13"><img style = "width: fit-content;" src="../plain/16x16 Punch/3.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-14"><img style = "width: fit-content;" src="../plain/16x16 Punch/4.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-15"><img style = "width: fit-content;" src="../plain/16x16 Punch/5.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-16"><img style = "width: fit-content;" src="../plain/16x16 Punch/6.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-17"><img style = "width: fit-content;" src="../plain/16x16 Punch/7.jpg" alt=""></label>
      </li>
      <li>
          <label for="slide-18"><img style = "width: fit-content;" src="../plain/16x16 Punch/8.jpg" alt=""></label>
      </li>
  </ul>
  </div>`;
  }
else if (arg === "value3") {
  document.getElementsByClassName(
    "container69"
  )[0].innerHTML = `<div class="carousel">
    <input type="radio" name="slides" checked="checked" id="slide-21">
    <input type="radio" name="slides" id="slide-22">
    <input type="radio" name="slides" id="slide-23">
    <input type="radio" name="slides" id="slide-24">
    <input type="radio" name="slides" id="slide-25">
    <input type="radio" name="slides" id="slide-26">
    <input type="radio" name="slides" id="slide-27">
    <input type="radio" name="slides" id="slide-28">
    <input type="radio" name="slides" id="slide-29">
    <input type="radio" name="slides" id="slide-30">
    <input type="radio" name="slides" id="slide-31">
    <input type="radio" name="slides" id="slide-32">
    <input type="radio" name="slides" id="slide-33">
    <ul class="carousel__slides">
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/1.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE 
                    <span class="credit">Design No:- 9002</span>
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/2.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9003</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/3.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9006</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/4.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9024</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/5.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9025</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/6.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9029</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/7.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9030</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/8.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9032</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/9.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9033</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/10.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9036</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/11.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9043</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/12.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9061</span>                            
                </figcaption>
            </figure>
        </li>
        <li class="carousel__slide">
            <figure>
                <div>
                    <img src="./plain/24x24 Carving/13.jpg" alt="">
                </div>
                <figcaption>
                    24x24 PORCELAIN TILES CARVING STYLE
                    <span class="credit">Design no:- 9063</span>                            
                </figcaption>
            </figure>
        </li>
        
        </ul>    
    <ul class="carousel__thumbnails">
        <li>
            <label for="slide-21"><img src="./plain/24x24 Carving/1.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-22"><img src="./plain/24x24 Carving/2.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-23"><img src="./plain/24x24 Carving/3.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-24"><img src="./plain/24x24 Carving/4.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-25"><img src="./plain/24x24 Carving/5.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-26"><img src="./plain/24x24 Carving/6.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-27"><img src="./plain/24x24 Carving/7.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-28"><img src="./plain/24x24 Carving/8.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-29"><img src="./plain/24x24 Carving/9.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-30"><img src="./plain/24x24 Carving/10.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-31"><img src="./plain/24x24 Carving/11.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-32"><img src="./plain/24x24 Carving/12.jpg" alt=""></label>
        </li>
        <li>
            <label for="slide-33"><img src="./plain/24x24 Carving/13.jpg" alt=""></label>
        </li>

    </ul>
</div>`;
} else if (arg === "value4") {
  document.getElementsByClassName(
    "container69"
  )[0].innerHTML = `<div class="carousel">
     <input type="radio" name="slides" checked="checked" id="slide-41">
     <input type="radio" name="slides" id="slide-42">
     <input type="radio" name="slides" id="slide-43">
     <input type="radio" name="slides" id="slide-44">
     <input type="radio" name="slides" id="slide-45">
     <input type="radio" name="slides" id="slide-46">
     <input type="radio" name="slides" id="slide-47">
     <input type="radio" name="slides" id="slide-48">
     <input type="radio" name="slides" id="slide-49">
     <input type="radio" name="slides" id="slide-50">
     <ul class="carousel__slides">
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/1.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Amarone Bianco</span>
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/2.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Calcutta Gold</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/3.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Segasta Crema</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/4.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Meroll Grey</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/5.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Morris Latte</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/6.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Morris Marrone</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/7.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Roma Gold</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/8.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- Statuario Eva</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/9.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- William Dark</span>                            
                 </figcaption>
             </figure>
         </li>
         <li class="carousel__slide">
             <figure>
                 <div>
                     <img src="./plain/24x48 Glossy/10.jpg" alt="">
                 </div>
                 <figcaption>
                     24x48 VITRIFIED TILES GLOSSY STYLE
                     <span class="credit">Design Name :- William Light</span>                            
                 </figcaption>
             </figure>
         </li>
         </ul>    
     <ul class="carousel__thumbnails">
         <li>
             <label for="slide-41"><img src="./plain/24x48 Glossy/1.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-42"><img src="./plain/24x48 Glossy/2.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-43"><img src="./plain/24x48 Glossy/3.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-44"><img src="./plain/24x48 Glossy/4.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-45"><img src="./plain/24x48 Glossy/5.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-46"><img src="./plain/24x48 Glossy/6.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-47"><img src="./plain/24x48 Glossy/7.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-48"><img src="./plain/24x48 Glossy/8.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-49"><img src="./plain/24x48 Glossy/9.jpg" alt=""></label>
         </li>
         <li>
             <label for="slide-50"><img src="./plain/24x48 Glossy/10.jpg" alt=""></label>
         </li>
     </ul>
 </div>`;
} 
else if (arg === "value5") {
    document.getElementsByClassName(
      "container69"
    )[0].innerHTML = `<div class="carousel">
 <input type="radio" name="slides" checked="checked" id="slide-51">
 <input type="radio" name="slides" id="slide-52">
 <input type="radio" name="slides" id="slide-53">
 <input type="radio" name="slides" id="slide-54">
 <input type="radio" name="slides" id="slide-55">
 <input type="radio" name="slides" id="slide-56">
 <input type="radio" name="slides" id="slide-57">
 <input type="radio" name="slides" id="slide-58">
 <input type="radio" name="slides" id="slide-59">
 <ul class="carousel__slides">
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/1.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- </span>
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/2.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- CR_Emma Natural</span>                            
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/3.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- CR_ Onexa Grey</span>                            
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/4.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- </span>                            
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/5.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Desgn Name :- CR_Rivar White</span>                            
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/6.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- CR_Solano Latte</span>                            
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/7.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- CR_Trevantino</span>                            
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/8.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- CR_Gold Flaks</span>                            
             </figcaption>
         </figure>
     </li>
     <li class="carousel__slide">
         <figure>
             <div>
                 <img src="./plain/24x48 Carving/9.jpg" alt="">
             </div>
             <figcaption>
                 24x48 VITRIFIED TILES CARVING STYLE
                 <span class="credit">Design Name :- </span>                            
             </figcaption>
         </figure>
     </li>
     </ul>    
 <ul class="carousel__thumbnails">
     <li>
         <label for="slide-51"><img src="./plain/24x48 Carving/1.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-52"><img src="./plain/24x48 Carving/2.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-53"><img src="./plain/24x48 Carving/3.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-54"><img src="./plain/24x48 Carving/4.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-55"><img src="./plain/24x48 Carving/5.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-56"><img src="./plain/24x48 Carving/6.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-57"><img src="./plain/24x48 Carving/7.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-58"><img src="./plain/24x48 Carving/8.jpg" alt=""></label>
     </li>
     <li>
         <label for="slide-59"><img src="./plain/24x48 Carving/9.jpg" alt=""></label>
     </li>
 </ul>
</div>`;
}
