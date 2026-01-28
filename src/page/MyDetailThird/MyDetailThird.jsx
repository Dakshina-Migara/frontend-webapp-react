import './MyDetailThird.css'
import ImgNav from '../../common/component/Imgnav/Imgnav'
import ProcessBar from '../../common/component/ProcessBar/ProcessBar'
import Footer from '../../common/component/Footer/Footer'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextArea from '../../common/component/TextArea/TextArea'
import ButtonAll from '../../common/component/ButtonAll/ButtonAll'
import ChildSlider from '../../common/component/ChildSlider/ChildSlider'
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useSelector, useDispatch } from 'react-redux';
import { saveData, nextStep } from '../../redux/formSlice';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function MyDetailThird() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formData = useSelector((state) => state.form.data);

    const userName = `${formData.firstName || ''} ${formData.lastName || ''}`;
    const gender = formData.genderData?.gender || '';
    const age = formData.age || '';
    const spouseName = formData.spouseName || '';
    const isMarried = formData.isMarried || false;

    const [numKids, setNumKids] = useState(formData.kids?.length || 0);
    const [kids, setKids] = useState(formData.kids || []);

    useEffect(() => {
        if (kids.length < 10) {
            const newKids = [...kids];
            for (let i = newKids.length; i < 10; i++) {
                newKids.push({ name: '', age: '' });
            }
            setKids(newKids);
        }
    }, [kids]);

    const handleKidChange = (index, field, value) => {
        const newKids = [...kids];
        newKids[index] = { ...newKids[index], [field]: value };
        setKids(newKids);
    };

    const isValid = !isMarried
        ? true
        : kids.slice(0, numKids).every(kid => kid.name && kid.age);

    const handleNext = () => {
        if (!isValid) return;
        dispatch(saveData({
            kids: isMarried ? kids.slice(0, numKids) : []
        }));
        dispatch(nextStep());
        navigate('/sixpage');
    };

    return (
        <div className='MyDetailThird'>
            <ImgNav />

            <ProcessBar
                processText={'My Details'}
                backtap={() => console.log('back tapped')}
                processStep={2}
                processVal={68}
            />

            <Box className="mydetailthird-header">
                <Typography variant="h6">My name is {userName}</Typography>
                <Typography variant="h6">And I am {gender} of {age} years old.</Typography>
                {isMarried && <Typography variant="h6">I am married to {spouseName}</Typography>}
                {!isMarried && <Typography variant="h6">I am single</Typography>}
            </Box>

            <Box className="mydetailthird-question">
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                    {isMarried ? 'I have (Kids)' : 'I am Single'}
                </Typography>
            </Box>

            {isMarried && (
                <Box className="mydetailthird-form">
                    <ChildSlider
                        value={numKids}
                        onChange={(event, value) => setNumKids(value)}
                    />

                    {kids.slice(0, numKids).map((kid, index) => (
                        <Box key={index} className="mydetailthird-kidrow">
                            <TextArea
                                textFieldText={`My kid ${index + 1} is`}
                                startIcon={<EmojiPeopleIcon />}
                                width="100%"
                                value={kid.name}
                                onChange={(val) => handleKidChange(index, 'name', val.target.value)}
                            />
                            <TextArea
                                textFieldText="Age"
                                width="120px"
                                value={kid.age}
                                onChange={(val) => handleKidChange(index, 'age', val.target.value)}
                            />
                        </Box>
                    ))}
                </Box>
            )}

            <Box className="mydetailthird-button">
                <ButtonAll
                    text="Next ->"
                    accountButton={handleNext}
                    backcolor="#FE5000"
                    textColor="white"
                    width="120px"
                    height="40px"
                    disabled={!isValid}
                />
            </Box>

            <Box className='footerNew1'>
                <Footer />
            </Box>
        </div>
    )
}
