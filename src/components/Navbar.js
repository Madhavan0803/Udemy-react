function Navbar(){
    return(
      <div class="s-serious">
      <div class="s1">
        <h1 class="s1-tittle">Udemy</h1>
      </div>
  
      <div class="s2">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input placeholder="search for anything here" />
      </div>
  
      <div class="s3">
        <p>Trending Courese</p>
        <div class="myLearning">
          <p>My Learning</p>
          <div class="myLearning__popup">
            <p>You did not purchase anything yet</p>
          </div>
        </div>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-sharp fa-solid fa-bell"></i>
        <i class="fa-solid fa-user"></i>
      </div>
  
      <div class="s4">
        <i class="fa-solid fa-bars"></i>
      </div>
    </div>
    )
  }

  export default Navbar