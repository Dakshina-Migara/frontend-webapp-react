import './MyDetailSecond.css'
import ImgNav from '../../common/component/Imgnav/Imgnav'
import ProcessBar from '../../common/component/ProcessBar/ProcessBar'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextArea from '../../common/component/TextArea/TextArea'
import ButtonAll from '../../common/component/ButtonAll/ButtonAll'
import StateSwitch from '../../common/component/StateSwitch/StateSwitch'
import GirlIcon from '@mui/icons-material/Girl';

export default function MyDetailSecond() {
    return (
        <div className='MydetailSecond'>


            <ImgNav />



            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('halooooo')}
                processStep={1}
                processVal={33.33}
            />




            <Typography variant="h6" gutterBottom sx={{ marginLeft: '520px', lineHeight: 1.8, marginTop: '20px' }}>
                My name is {'userName'}

            </Typography>




            <Typography
                variant="h6"
                sx={{ marginLeft: '480px' }}
            >
                And I am {'gender'} of {'age'} years old.
            </Typography>




            <Box sx={{
                maxWidth: 500,
                marginLeft: '450px',
                marginTop: '30px',
                display: 'flex',
                flexDirection: 'column',
            }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ fontWeight: 'bold' }}
                >
                    Are you married?
                </Typography>
            </Box>




            <div style={{ width: '500px', gap: '20px', marginTop: '20px', marginBottom: '140px' }}>
                <StateSwitch
                    left='500px'
                />

                <TextArea
                    textFieldText='My wife is'
                    placeholderText=''
                    startIcon={<GirlIcon />}
                    width='50%'
                    left='500px'
                    margintop='20px'
                />

                <ButtonAll
                    accountButton={() => console.log('clicked')}
                    text='Next->'
                    height='40px'
                    width='100px'
                    left='655px'
                    top='50px'
                    textColor='white'
                    backcolor='#FE5000'
                />
            </div>




            <div className='footerNew1'>
                <Footer />
            </div>
        </div>
    )
}
