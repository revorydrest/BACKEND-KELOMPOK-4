import React, { useState, useEffect } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import img1 from '../FotoAnggota/Kevin.png';
import img2 from '../FotoAnggota/Raihan.png';
import img3 from '../FotoAnggota/Alya.png';
import img4 from '../FotoAnggota/Mitchel.png';
import instagram from '../FotoAnggota/instagram.png';
import classlogo from '../FotoAnggota/classlogo.png';
import nimlogo from '../FotoAnggota/nimlogo.png';
import "./Prpil.css";

function Profile() {
    const [openModal1, setOpenModal1] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);

    useEffect(() => {
        const hash = window.location.hash;
        if (hash === "#profile") {
            window.scrollTo(0, 0);
            setTimeout(() => {
                document.getElementById("profile").scrollIntoView({ behavior: "smooth" });
            }, 100);
        }
    }, []);

    return (
        <div id="profile">
            <h1 className="team-title">Grup Profile</h1>
            <div className="team-members">
                <div className="team-member" onClick={() => setOpenModal1(true)}>
                    <img src={img1} alt="Kevin"/>
                    <p>Kevin Mahardika Zebua</p>
                </div>
                <div className="team-member" onClick={() => setOpenModal2(true)}>
                    <img src={img2} alt="Raihan" />
                    <p>Raihan Ramadan Setiawan</p>
                </div>
                <div className="team-member" onClick={() => setOpenModal3(true)}>
                    <img src={img3} alt="Alya" />
                    <p>Alya Mafira</p>
                </div>
                <div className="team-member" onClick={() => setOpenModal4(true)}>
                    <img src={img4} alt="Mitchel" />
                    <p>Mitchel Mohamad Affandi</p>
                </div>
            </div>

            <Modal open={openModal1} onClose={() => setOpenModal1(false)} center>
                <h2>Kevin Mahardika Zebua</h2>
                <p className="duar">
                    <img src={nimlogo} alt="NIM" className="logo" />
                    <span className="duar-text">1101223101</span>
                </p>
                <p className="duar">
                    <img src={classlogo} alt="NIM" className="logo" />
                    <span className="duar-text">TT-46-11</span>
                </p>
                <p className="duar">
                <a href ="https://www.instagram.com/kengpvin/" target="_blank">
                    <img src={instagram} alt="Instagram" className="logo" />
                    <span className="duar-text">@kengpvin</span>
                </a>
                </p>
            </Modal>

            <Modal open={openModal2} onClose={() => setOpenModal2(false)} center>
                <h2>Raihan Ramadan Setiawan</h2>              
                <p className="duar">
                    <img src={nimlogo} alt="NIM" className="logo" />
                    <span className="duar-text">1101223012</span>
                </p>
                <p className="duar">
                    <img src={classlogo} alt="NIM" className="logo" />
                    <span className="duar-text">TT-46-11</span>
                </p>
                <p className="duar">
                <a href ="https://www.instagram.com/raihanrrtwn/" target="_blank">
                    <img src={instagram} alt="Instagram" className="logo" />
                    <span className="duar-text">@raihanrrtwn</span>
                </a>
                </p>
            </Modal>

            <Modal open={openModal3} onClose={() => setOpenModal3(false)} center>
                <h2>Alya Mafira</h2>
                <p className="duar">
                    <img src={nimlogo} alt="NIM" className="logo" />
                    <span className="duar-text">1101223240</span>
                </p>
                <p className="duar">
                    <img src={classlogo} alt="NIM" className="logo" />
                    <span className="duar-text">TT-46-08</span>
                </p>
                <p className="duar">   
                <a href ="https://www.instagram.com/alyamafira_/" target="_blank">
                    <img src={instagram} alt="Instagram" className="logo" />
                    <span className="duar-text">@alyamafira_</span>
                </a>
                </p>
            </Modal>

            <Modal open={openModal4} onClose={() => setOpenModal4(false)} center>
                <h2>Mitchel Mohamad Affandi</h2>
                <p className="duar">
                    <img src={nimlogo} alt="NIM" className="logo" />
                    <span className="duar-text">101012340132</span>
                </p>
                <p className="duar">
                    <img src={classlogo} alt="NIM" className="logo" />
                    <span className="duar-text">TT-47-INT</span>
                </p>
                <p className="duar">
                <a href ="https://www.instagram.com/mtchffnd/" target="_blank">
                    <img src={instagram} alt="Instagram" className="logo" />
                    <span className="duar-text">@mtchffnd</span>
                </a>
                </p>
            </Modal>
        </div>
    );
}

export default Profile;
