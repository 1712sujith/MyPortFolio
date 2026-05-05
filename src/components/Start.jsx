import React,{ useState } from 'react'

function Start() {
    const data=[{name:"sujith", age:23, course:"mern stack"},
    {name:"siva", age:25, course:"full stack in java"},
    {name:"ashok", age:29, course:"full stack in phython"},
    {name:"kalyan", age:23, course:"rpa"}];
    const[search,setSearch]=useState("");
    function handleSearch(e){
        setSearch(e.target.value);
    }
    const filterData=data.filter((element)=>element.name.toLowerCase().includes(search.toLowerCase())||
    element.age.toString().includes(search)||element.course.toLowerCase().includes(search.toLowerCase()));
  return (
    <div >
<input type="text"placeholder='search' value={search} onChange={handleSearch} /><br /><br />
<table>
<thead>
    <tr>
        <th>name</th>
        <th>age</th>
        <th>course</th>
    </tr>
</thead>
<tbody>
    {filterData.length>0?
    (filterData.map(element=>(
        <tr  className='border' >
            <td>{element.name}</td>
            <td>{element.age}</td>
            <td>{element.course}</td>
        </tr>
    ))):( <tr>
        <td colSpan={4} style={{textAlign:"center"}}>no match found</td>
    </tr> )}
</tbody>
</table>
    </div>
  )
}


export default Start