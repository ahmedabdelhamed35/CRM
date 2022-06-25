import React from 'react'
import './addproject.css'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


import Grid from '@mui/material/Grid';

export default function Addproject() {
    return (
        <div className='addproject'>
            <div className="addprojectWrapper">
                <Grid container spacing={2} columns={16}>
                    <Grid item xs={2}>
                        <div className='addingprojectPhoto'>
                            <input type="file" id="upload" hidden />
                            <label for="upload"><AddPhotoAlternateIcon className='addingprojicon' /></label>
                                
                            <p className='addprojorder'>اضف صورة المشروع هنا </p>
                        </div>
                    </Grid>
                    <Grid item xs={10}>
                        <div className='addingprojectDet'>
                            <form className='fromofaddproject'>
                                <label for="fname" className='titleofaddedproject'>اسم المشروع </label>
                                <br />
                                <input className='addingprojinputname' type="text" id="fname" name="fname" placeholder='اسم المشروع' />
                            </form>

                            <form className='fromofaddproject'>
                                <label for="fname" className='titleofaddedproject'>العنوان</label>
                                <br />
                                <input className='addingprojinputname' type="text" id="fname" name="fname" placeholder='عنوان المشروع' />
                            </form>





                        </div>
                    </Grid>
                </Grid>

            </div>
        </div>
    )
}
