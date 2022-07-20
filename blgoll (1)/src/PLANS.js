import './App.CSS';
const Plans =()=>{
  return ( 
     <>
    <h1>Plans</h1>
  <label>Plans All</label>
    <div class="dropdown">  
<button class="dropbtn"> JavaTpoint Web Desiging Tutorials</button>  
<div class="dropdown-content">  

 {
      <nav>
        <ul>
          <li>
            <Link to="/PLAN1">PLAN1</Link>
          </li>
          <li>
            <Link to="/PLANS">PLAN2</Link>
          </li>
          <li>
            <Link to="/DATA">PLAN3</Link>
          </li>
          <li>
            <Link to="/DATA1">PLAN4</Link>
          </li>
          <li>
            <Link to="/DATA2">PLAN5</Link>
          </li>
        </ul>
      </nav>}

</div>
</div>
    </>
  );

  
}
export default Plans;