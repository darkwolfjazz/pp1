import "../styles.css"

export default function Navbar(){
    return(
        <div>
       <nav >
        <div className="logo">
        <img src="brand_logo.png" alt="logo"></img>
        </div>
      <ul>
        <li href="#"> Menu</li>
        <li href="#"> Location</li>
        <li href="#"> About </li>
        <li href="#"> Contact </li>
      </ul>
      <button>Login</button>
 
       </nav>
       


        </div>
    )
}