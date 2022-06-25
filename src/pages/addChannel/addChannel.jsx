import React from 'react'

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import './AddChannel.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary
  }));


export default function AddChannel() {
    return (
        <div className='addChannel'>
            <div className="addChannelWrapper">
                <div className="channelname">

                    <label for="fname" className='addingchannelText'>اسم القناه</label>
                    <input type="text" id="fname" name="fname" className='addingchannelinput'></input>

                </div>


                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <p className='imgUPP' > صورة القناه</p>
                        <Grid item xs={6} md={6} className="leftnice">
                            <Item> <div className="channelImage">

                                <input type="file" id="upload" hidden />
                                
                                    <label className='imglable' for="upload"><AddPhotoAlternateIcon className='upicon' /></label>

                                

                            </div></Item>
                        </Grid>
                    </Grid>
                </Box>


            <button className='channeladdingbutton'>
                اضافة
            </button>
                


            </div>

            
        </div>
    )
}
