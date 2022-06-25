import React, { useState } from 'react'
import PhoneInput from "react-phone-number-input";

import './addemployee.css'
export default function Addemployee() {

    const [value, setValue] = useState()

  return (
    <div className='addemployee'>
        
            <div className="addemployeeWrapper">
                {/*------------header--------------------------------------*/}
                <div className="addemployeeHeader">
                    <h4>مرحبا بك!</h4>
                    <p>الرجاء ملئ البيانات المطلوبه لاضافة موظف جديد</p>
                </div>


                {/*---------------datainput-----------------------------------*/}
                <div className="addemployeecontainer">
                    {/*-------------------------ProjN/Proj/mediaChannel-----------------------*/}
                    <div className="addclientFcol">
                        <div className="name">
                            <h5>الاسم*</h5>
                            <input type="text" placeholder='الاسم' />
                        </div>

                        <div className="proj">
                            <h5>الوظيفه</h5>
                            <input type="text" placeholder='الوظيفه' />
                        </div>

                    </div>


                    <div className="addemployeeScol">
                        <div className="phone">
                            <h5>الهاتف*</h5>
                            <PhoneInput
                                style={{
                                    width: '92%'
                                }}
                                defaultCountry="EG"
                                placeholder="+020"
                                value={value}
                                onChange={setValue} />
                        </div>


                        <div className="seals">
                            <h5>البريد الالكترونى</h5>
                            <input type="text" placeholder='البريد الالكترونى' />
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
