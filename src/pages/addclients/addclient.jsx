import React, { useState } from "react";
import './addclient.css'
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';





export default function Addclient() {

    

   



    const [value, setValue] = useState()
    return (
        <div className='addclient'>
            <div className="addclientWrapper">
                {/*------------header--------------------------------------*/}
                <div className="addclientHeader">
                    <h4>مرحبا بك!</h4>
                    <p>الرجاء ملئ البيانات المطلوبه لاضافة عميل جديد</p>
                </div>


                {/*---------------datainput-----------------------------------*/}
                <div className="addclientcontainer">
                    {/*-------------------------ProjN/Proj/mediaChannel-----------------------*/}
                    <div className="addclientFcol">
                        <div className="name">
                            <h5>الاسم*</h5>
                            <input type="text" placeholder='الاسم' />
                        </div>

                        <div className="proj">
                            <h5>المشروع*</h5>
                            <input type="text" placeholder='المشروع' />
                        </div>

                        <div className="channel">
                            <h5>القناه الاعلانيه</h5>

                            <Autocomplete
                                disablePortal
                                id="combo-box-demo"
                                options={ChannelMedia}
                                sx={{ width: 300 }}
                                renderInput={(params) => <TextField {...params} label="" />}
                            />

                        </div>

                    </div>


                    <div className="addclientScol">
                        <div className="phone">
                            <h5>الهاتف*</h5>
                            <PhoneInput
                                style={{
                                    width: '81.5%'
                                }}
                                defaultCountry="EG"
                                placeholder="+020"
                                value={value}
                                onChange={setValue} />
                        </div>


                        <div className="seals">
                            <h5>مسؤول المبيعات*</h5>
                            <input type="text" />
                        </div>

                        <div className="contact">
                            <h5>طريقة التواصل</h5>
                            <input type="text" placeholder='طريقة التواصل' />
                        </div>
                    </div>



                    <div className="addclienTHFcol">

                        <div className="email">
                            <h5>البريد الالكترونى</h5>
                            <input type="text" placeholder='البريد الالكترونى' />
                        </div>

                        <div className="link">
                            <h5>الوسيط</h5>
                            <input type="text" placeholder='الوسيط' />
                        </div>

                        <div className="budget">
                            <h5>الميزانيه</h5>
                            <input type="text" placeholder='الميزانيه' />
                        </div>


                    </div>

                    <div className="buttonsfield">
                        <button className='save'>حفظ</button>
                        <button className='cancel'>الغاء</button>
                    </div>






                </div>
            </div>
        </div>
    )
}
const ChannelMedia = [
    { label: 'wfafsaf', year: 1994 },
    { label: 'xcvcxvcv', year: 1972 },
    { label: 'bnvbnvbnvbn', year: 1974 },
    { label: 'hgjghjfj', year: 2008 },
    { label: 'dsfgfdsgsdfg', year: 1957 },
    { label: "cvbxbvbxb", year: 1993 },
    { label: 'cvbxbxcbxcbv', year: 1994 },
   
    
  ];