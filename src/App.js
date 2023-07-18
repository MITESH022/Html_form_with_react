import { useState } from 'react';
import './App.css';
// import Productdetails from './Productdetails';
// import { useState } from 'react';
// import Second from './Second'



function App() {
 
    // const [count , setcount] = useState(0)
    // const [roll , setroll] = useState(100)
    // const [num , setnum] = useState(0)
    // // const [name , setname] = useState("rj"); 
    // const firststatevariable = useState("rj")
    
    // const name = firststatevariable[0];
    // const setname= firststatevariable[1];

    // const [up ,setup] = useState("roman")
    
  // var x = 10;
  // function handlclick(){
  //     x=15;

  // }
  // console.log(x,"out");

  // const handleclick = () =>{

  //     setcount(count+1)
  //     setroll(roll+1)
  //     // firststatevariable[1]("geek");
  //     setname("geek")
      
  //   }
    
  //   const handletoggle = () =>{
      

  //    (up === "roman") ? setup("Don") : setup("roman")
      

  // }


  // const handlnum = (num) =>{

  //   setnum(num + 1);
  //   setnum(num + 1);
    
    
  //   setnum((perv)=> perv + 1);
  //   setnum((perv)=> perv + 1);    
  // }

  // const myfn = () => handlnum(5);
  // let data = "jugnu";

  // function apple() {

      // data = "ajubhai"
      // alert("oh aya tamey aa duniya ma:" + data)
  // }

  // const xyz = () => alert("xyz")

  // const [data ,setData] = useState(0);

  // function handleclick(){

    // setData((per) => per + 1);
    // setData(data + 1);
    // console.log(data,"re");
    // }

    // const [data ,setData] = useState(null);
    // const [print , setprint] = useState(true);

    // function getdata(e){


      // console.log(e.target.value);
      // setData(e.target.value);
      // setprint(false)
    // }

    // const [status , setstatus] = useState(true)

    // const chala = () =>{
      // setstatus(!status)
    // }
          
      // const [name ,setname] = useState("");
      // const [tnc ,settnc] = useState(false);
      // const [interest ,setinterest] = useState("");
      // function getdata(e){
          // console.log(name,tnc,interest);
          // e.preventDefault()
          
        // }

        // const [LoggedIn , setLoggIn] = useState(4);

        // 1,2,3,

        const words =[
          {id:0,value:"apple"},
          {id:1,value:"orange"},
          {id:2,value:"mango"},
          {id:3,value:"graps"},
        ]
            const [first , setfirst] = useState("abc");
            const [second , setsecond] = useState("");
            const [alldata ,setalldata] = useState([]);
            const [gender ,setgender] = useState();
            const [sel , setsel] = useState();
            const [one ,setone] = useState(true);
            const [two ,settwo] = useState(true);
            const [worddata ,setworddata] = useState(words[0].value);
            const [show , setshow] = useState(false);
            const [date , setdate] = useState();

        const handlsubmit = (e) =>{
            e.preventDefault();
            console.log(first ,second);
            // const data = {first ,second}
            
            
            // const first=e.target.fname.value;
          // const second=e.target.lname.value;

          // console.log(`first name: ${first}`);
          // console.log(`last name: ${second}`);

          if (first && second) {
              setalldata((per)=>[...per,{first,second}])
            setfirst("");
            setsecond("");
          }

        }

        const handleinp = (e)=> setfirst(e.target.value);
        const handleemail = (e)=> setsecond(e.target.value);
        const printall = (a,i)=>
          (
            <div key={i}>
            <li>{a.first}</li>
            <li>{a.second}</li>
            </div>
          )

          const handelcheck = (data) =>{

              // console.log(data);
              if (data === "one") {
                  if (one === true) {
                      console.log(data ,"one is check");
                  }
                  setone(!one);
              }
              if(data === "two")
              {
                if(two === true){

                    console.log(data,"two is check");
                }
                settwo(!two);
              }
          }
          
          const fchek =()=>handelcheck("one");

        const handclick = (ind)=>{

              // console.log(ind);
              // console.log( words[ind].value);
              const silderwords = words[ind].value;
              setworddata(silderwords)
        }      

        const handleshow = () =>{

              setshow(!show);
        }

          return (
    
    
    <div className="App">
{/* 
        {

            LoggedIn ==1 ?    
            <h1>welcom ali 1</h1>
            :LoggedIn==2?
            <h1>welcome Guest 2</h1>
            :LoggedIn==3 
            <h1>welcome users 3</h1>



          } */}
          {/* <p>{first}</p> */}
          {/* <p>{second}</p> */}
          <form onSubmit={handlsubmit}>

          <h1>welcome users 4 </h1> 
          <input type='text' name='fname' placeholder='first name'  value={first} onChange={handleinp} /><br/>
          <input type='text' name='email' placeholder='last name' value={second} onChange={handleemail} /><br/>
          <button>submit</button>
          </form>
          <h1>{gender}</h1>
          <input type="radio" name='gender'  value="male" onChange={(e)=>setgender(e.target.value)} />Male
          <input type="radio" name='gender'  value="female" onChange={(e)=>setgender(e.target.value)} />female<br/>

     
            <h1>{sel}</h1>
            <select value={sel} onChange={e => setsel(e.target.value)}>
              <option></option>
              <option>Apple</option>
              <option>Orenge</option>
              <option>graps</option></select><br/>


              <input type="checkbox" value={one} onChange={fchek} />one
              <input type="checkbox" value={two}  onChange={()=>handelcheck("two")} />two
              <div  className='flex-row'>{worddata}</div>
              <div className='flex-row'>
                {

                    words.map((data ,ind) =>
                        <h1  key={ind} onClick={() =>handclick(ind)}>.</h1>
                    )
                }

              </div>

              <input type={show ? "text":"password"} />
              <label onClick={handleshow}>{show ? "Hide":"Show"}</label><br/>

              <h1>{date}</h1>
              <input type="date" onChange={(e)=> setdate(e.target.value)}/>
                
          {
            
            alldata.map(printall)
          }

          


      {/* <form onSubmit={getdata}>
        <input type='text' placeholder='enter name' onChange={(e) =>setname(e.target.value)}/><br/>
        <select  onChange={(e) =>setinterest(e.target.value)}>
          <option>select option</option>
          <option>Marvel</option>
          <option>DC</option>
        </select> <br/>
        <input type='checkbox' onChange={(e) =>settnc(e.target.checked)} /><span>Accept Teams and  conditions</span><br/>
        <button type='submit'>submit</button>
      </form> */}
      {/* { */}
        {/* // status?<h1>Hello world !</h1>:null */}

      {/* // } */}
      {/* <button onClick={() => setstatus(false)}>Hide</button> */}
      {/* <button onClick={() =>setstatus(true)}>show</button> */}
      {/* <button onClick={chala}>Toggle</button> */}
        {/* {
          // print?
          // null:<h1>Get Input box value:{data} </h1>
        } */}
      {/* <input type='text' onChange={getdata}/> */}
      {/* <button onClick={() => setprint(false)}>print</button> */}

      {/* <h1>{data}</h1> */}
      {/* <button onClick={handleclick}>Updata</button> */}
      {/* <h1>hello Duniya {data}</h1> */}
      {/* <button onClick={apple}>click</button> */}
      {/* <Second /> */}

      {/* <Productdetails/> */}
       {/* <h1>button click {count} && {roll} && {name} </h1>    */}
      {/* {firststatevariable[0]}   */}
          {/* <h2>{up}</h2>  */}
      {/* <button onClick={handleclick}>click me </button> */}
     {/* <button onClick={handletoggle}> togale</button>  */}

     

       {/* <h1>learning start {num}</h1> */}
     {/* <button onClick={myfn}>click me </button> */}
     
     {/* <button onClick={() => handlnum(5)}>click me </button>  */}

        
    </div>
  );
}

export default App;
