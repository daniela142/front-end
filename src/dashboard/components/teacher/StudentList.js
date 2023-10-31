import React from "react";
import { useNavigate } from "react-router-dom";
import "../../style/teachercourses.css";
import ProfileIcon from "../../svg/profileIcon";

const user = JSON.parse(localStorage.getItem("User"));

export const StudentList = () => {

    const students = [
        {
            name: 'John Doe',
            id: '123',
        },
        {
            name: 'Jane Doe',
            id: '456',
        },
        {
            name: 'John Doe',
            id: '789',
        },
    ];

    return (
    <div className="students-box">
            {/* <ul className='student-list'>
                {students.map((student, index) => {
                    return (
                    <li className="student">{student.name}</li>);
                })}
            </ul> */}

<div style={{width: '100%', height: '100%', position: 'relative', background: 'white', borderRadius: 23.39, overflow: 'hidden'}}>
    <div style={{width: 70.17, height: 70.17, left: 318.09, top: 806.54, position: 'absolute'}}>
        <div style={{width: 70.17, height: 70.17, left: 0, top: 0, position: 'absolute', background: '#E53170', borderRadius: 9999}} />
        <div style={{width: 35.08, height: 35.08, left: 17.54, top: 17.54, position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
            <div style={{width: 27.77, height: 27.77, background: 'white'}}></div>
        </div>
    </div>
    <div style={{width: 136.33, height: 20.66, left: 36, top: 29, position: 'absolute', color: 'black', fontSize: 26, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Students</div>
    <div style={{width: 283, height: 0, left: 10, top: 155, position: 'absolute', border: '0.50px black solid'}}></div>
    <div style={{width: 283, height: 0, left: 10, top: 246, position: 'absolute', border: '0.50px black solid'}}></div>
    <div style={{width: 283, height: 0, left: 10, top: 337, position: 'absolute', border: '0.50px black solid'}}></div>
    <div style={{width: 283, height: 0, left: 10, top: 422, position: 'absolute', border: '0.50px black solid'}}></div>
    <div style={{width: 283, height: 0, left: 10, top: 507, position: 'absolute', border: '0.50px black solid'}}></div>
    <div style={{width: 283, height: 0, left: 10, top: 592, position: 'absolute', border: '0.50px black solid'}}></div>


    <div style={{width: 49, height: 49, left: 20, top: 89, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
    <div style={{width: 49, height: 49, left: 20, top: 180, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
    <div style={{width: 49, height: 49, left: 20, top: 271, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
    <div style={{width: 49, height: 49, left: 20, top: 354, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
    <div style={{width: 49, height: 49, left: 20, top: 440, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />
    <div style={{width: 49, height: 49, left: 20, top: 525, position: 'absolute', background: '#D9D9D9', borderRadius: 9999}} />


    <div style={{width: 143, height: 22, left: 90, top: 91, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Beeto Beeto</div>
    <div style={{width: 143, height: 22, left: 90, top: 116, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Rank: Diamond </div>
    <div style={{width: 143, height: 22, left: 90, top: 177, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Quan Quan<br/></div>
    <div style={{width: 143, height: 22, left: 90, top: 202, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Rank: Iron</div>
    <div style={{width: 143, height: 22, left: 90, top: 268, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Daniel Daniel<br/></div>
    <div style={{width: 143, height: 22, left: 90, top: 293, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Rank: Bronze</div>
    <div style={{width: 143, height: 22, left: 90, top: 356, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Trish Nguyen<br/></div>
    <div style={{width: 143, height: 22, left: 90, top: 381, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Rank: Diamond</div>
    <div style={{width: 143, height: 22, left: 90, top: 441, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Platypus Perry<br/></div>
    <div style={{width: 143, height: 22, left: 90, top: 466, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Rank: Platinum</div>
    <div style={{width: 143, height: 22, left: 90, top: 526, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Cristiano Ronaldo<br/></div>
    <div style={{width: 143, height: 22, left: 90, top: 551, position: 'absolute', color: 'black', fontSize: 12, fontFamily: 'Inter', fontWeight: '300', wordWrap: 'break-word'}}>Rank: Silver</div>
 
    <div style={{width: 28, height: 36, left: 30, top: 95, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', marginTop:"8px"}}>B</div>
    <div style={{width: 28, height: 36, left: 30, top: 187, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', marginTop:"8px"}}>Q</div>
    <div style={{width: 28, height: 36, left: 30, top: 277, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', marginTop:"8px"}}>D</div>
    <div style={{width: 28, height: 36, left: 30, top: 360, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', marginTop:"8px"}}>T</div>
    <div style={{width: 28, height: 36, left: 30, top: 446, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', marginTop:"8px"}}>P</div>
    <div style={{width: 28, height: 36, left: 30, top: 531, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word', marginTop:"8px"}}>C</div>
    
</div>

        </div>
   
    );
}