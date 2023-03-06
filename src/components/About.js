import React, {useState} from 'react'

export default function About() {

     const [myStyle, setmyStyle]= useState({
     color:"Black",
     backgroundColor: 'white'
    })
    
    const [btnText,setBtnText] = useState("Enable Dark Mode");

    const toggleStyle = ()=>{
      if(myStyle.color === 'black'){
        setmyStyle({
            color:'white',
            backgroundColor:'black',
            border: '1px solid white'
        })
        setBtnText("Enable Light Mode");
      }
      else{
        setmyStyle({
            color: "black",
            backgroundColor:'white'
        })
        setBtnText("Enable Dark Mode");
      }
    }

  return (
        <div className='container' style={myStyle}>
            <h2 className='my-3'>About Us</h2>
           <div className="accordion" id="accordionExample" style={myStyle}>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Collapsible Group Item #1
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" style={myStyle} aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body" style={myStyle}>
        Some placeholder content for the first accordion panel. This panel is shown by default, thanks to the <code>.show</code> class.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Collapsible Group Item #2
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Some placeholder content for the second accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
  <div className="card" style={myStyle}>
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
            <button className="btn btn-link btn-block text-left collapsed" style={myStyle} type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Collapsible Group Item #3
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
        And lastly, the placeholder content for the third and final accordion panel. This panel is hidden by default.
      </div>
    </div>
  </div>
</div>

<div className="container my-3">
<button onClick={toggleStyle} type='button' className='my-3 btn btn-primary'>{btnText}</button>
</div>
    </div>
  )
}
