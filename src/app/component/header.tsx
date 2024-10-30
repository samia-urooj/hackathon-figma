import Link from "next/link";


const Header=()=>{
    return(
        <div className="parentCont">
      <div className="headerCont">
        <h3 className="cyber"><b>cyber</b></h3>
        <input type="text" id="search" name="search" placeholder="   search"></input>
        <Link href="/"><h3>Home</h3></Link>
        <h3>About</h3>
        <h3>Contact us</h3>
        <h3>Blog</h3>
       <div className="img2"> <img  src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"></img> 
       <img src="https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png"></img>
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHcASDJ4cA2sigwOXj0_hNTuoijeCs528i9ffST9ichwhZtxyX9rbIn3AKWSvGIFUEnG0&usqp=CAU"></img></div></div>
       
        </div>
    )
}


export default Header;