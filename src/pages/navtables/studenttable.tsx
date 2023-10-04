import React from "react";
import Navbar from "../../components/ts/navbar/navbar";
import PageTitle from "../../components/ts/pagetitle/pagetitle";
import Footer from "../../components/ts/footer/Footer";
import '../../components/scss/pages/navtables/studenttable.scss';

const StudentTable = () => {
    return (
        <div id="StudentTable">
            <Navbar />
            <PageTitle height={80} mainText="Student Table" subText="Select relevant topics here!" oxfLogo={false} backgroundLink="OxfFrontImage.jpg" backgroundVhPreDown={700} backgroundVhDownRate={32} titleVhDownRate={30} percentageDown={32} titleVhPreDown={0} />
            <div className="table-container">
                <span className="top-elements">
                    <h1 className="table-title">Student Table</h1>
                    <span className="table-type">
                        <button className="grid">Grid</button>
                        <button className="list">List</button>
                    </span>
                </span>

            </div>
            <Footer title="Student Table" />
        </div>
    )
}

export default StudentTable;