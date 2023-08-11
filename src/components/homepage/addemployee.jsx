import React from "react";
import { useNavigate } from "react-router-dom";

const containerinput = {
    width: "100%"
}

const contaierbox = {
    margin: "12px"
}

const contaierbox2 = {
    margin: "12px",
    textAlign:"left"
}



export default function Addemployee() {

    const navigate = useNavigate()
    return (

        <div>
            <div>
                <div className="container-fluid bg-dark" style={{ margin: "12px", padding: "12px" }}>
                    <form className="form-horizontal">
                        <div className="row" style={{padding:"12px"}}>
                            <div className="col-sm-6">
                                <div style={{textAlign:"left"}}>
                                    <span style={{ color: "white" }}>Add Employee</span>

                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div style={{textAlign:"right"}}>
                                    <span onClick={()=>{navigate('/')}} style={{ color: "white" }}>Back</span>

                                </div>                          </div>

                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <div>

                                    <div style={contaierbox}>

                                        <input type="text" className="form-control" style={containerinput} id="name" placeholder="Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div >

                                    <div style={contaierbox}>
                                        <input type="text" className="form-control" style={containerinput} id="department" placeholder="Department" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div >

                                    <div style={contaierbox}>
                                        <input type="text" style={containerinput} className="form-control" id="department" placeholder="Department" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div >

                                    <div style={contaierbox}>
                                        <input type="text" style={containerinput} className="form-control" id="department" placeholder="Department" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div >

                                    <div style={contaierbox}>
                                        <input type="text" style={containerinput} className="form-control" id="department" placeholder="Department" />
                                    </div>
                                </div>
                            </div>

                            <div className="col-sm-12">
                                <div >

                                    <div style={contaierbox2}>
                                    <button type="button" className="btn btn-warning">Submit</button>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}