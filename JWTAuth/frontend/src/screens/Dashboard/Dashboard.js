import React, { useState,useEffect } from "react";
import MainScreen from "../../components/MainScreen";
import Cookies from 'js-cookie';
import "./Dashboard.css";

function Dashboard({ history, search }) {
  const [names,setNames] = useState([]);
  const [programs,setPrograms] = useState([]);
  let y1 = Cookies.get('token');

  useEffect(() => {
    if (!Cookies.get('token')) {
      history.push("/login");
    }
  }, []);

  useEffect(()=>{
    fetch("/api/users/getUsers")
    .then(res => {
      return res.json();
    })
    .then((resJson)=> {
      let x1 = resJson.usersAll;
      return setNames(x1);
    });

  },[]);
  
  useEffect(()=>{
    fetch("/api/users/getPrograms")
    .then(res => {
      return res.json();
    })
    .then((resJson)=> {
      let x2 = resJson.programsAll;
      return setPrograms(x2);
    });
  },[]);

  return (
    <MainScreen title={`Welcome Back`}>
      <div className="empty-div"></div>

{names.length>1? (<div className="searchPOIbox">
  <h1>Residents List</h1>
    {names.map((x,key) => 
          <table id="customers">
          <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Preferredname</th>
              <th>Status</th>
              <th>Room</th>
              <th>LevelofCare</th>
              <th>Ambulation</th>
              <th>BirthDate</th>
              <th>MoveinDate</th>
              <th>Author</th>
            </tr>
          

          <tr>
              <td>{x.id? <>{x.id.slice(0,2)}</>:null}</td>
              <td>{x.name}</td>
              <td>{x.firstName}</td>
              <td>{x.lastName}</td>
              <td>{(x.preferredName)? <>{x.preferredName}</>:'None'}</td>
              <td>{x.status}</td>
              <td>{x.room}</td>
              <td>{x.levelofCare}</td>
              <td>{x.ambulation? x.ambulation.slice(0,7):null}</td>
              <td>{x['birthDate']? x['birthDate']['@ts'].slice(0,10):null}</td>
              <td>{x['moveInDate']? x['moveInDate']['@ts'].slice(0,10):null}</td>
              <td>{(!x.author)? <>Empty</>:null}</td>      
          </tr>
      </table>
    )}
    </div>) 
    : (<div className="searchResNotFound"><i>Loading Residents...</i></div>)}
  





<br/>
<br/>
    {programs.length>1? (<div className="searchPOIbox">
  <h1>Programs List</h1>
    {programs.map((x,key) => 
          <table id="customers">
          <tr>
              <th>AllDay</th>
              <th>Dimension</th>
              <th>End</th>
              <th>Facilitators</th>
              <th>Hobbies</th>
              <th>ID</th>
              <th>Name</th>
              <th>Repeated</th>
              <th>levelofCare</th>
              <th>Location</th>
              <th>Name</th>
              <th>Start</th>
              <th>Tags</th>
            </tr>
          <tr>
              <td>{x.allDay}</td>
              <td>{x.dimension}</td>
              <td>{x.end? <>{x.end.slice(0,2)}</>:null}</td>
              <td>{x.facilitators.map(x => <div>{x[0]}</div>)}</td>
              <td>{x.hobbies.map(x => <div>{x[0]}</div>)}</td>
              <td>{x.id? <>{x.id.slice(0,5)}</>:null}</td>
              <td>{x.name}</td>
              <td>{x.isRepeated}</td>
              <td>{x.levelofCare? x.levelofCare[0]:null}</td>
              <td>{x.location}</td>
              <td>{x.name}</td>
              <td>{x.start? x.start.slice(0,7):null}</td>
              <td>{x.tags.map(x => <div>{x[0]}</div>)}</td>
          </tr>
      </table>
    )}
    </div>) 
    : (<div className="searchResNotFound"><i>Loading Programs...</i></div>)}
    
    </MainScreen>
  );
}

export default Dashboard;
