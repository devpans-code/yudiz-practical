import logo from './logo.svg';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './App.css';
import { useState } from 'react';

const dataArr = [{
  id: 1,
  icon1: "fa fa-birthday-cake",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 2,
  icon1: "fa fa-address-book",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 3,
  icon1: "fa fa-address-card",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 4,
  icon1: "fa fa-id-badge",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 5,
  icon1: "fa fa-meetup",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 6,
  icon1: "fa fa-microchip",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 7,
  icon1: "fa fa-podcast",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 8,
  icon1: "fa fa-user-circle",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 9,
  icon1: "fa fa-vcard-o",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 10,
  icon1: "fa fa-american-sign-language-interpreting",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 11,
  icon1: "fa fa-bank",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 12,
  icon1: "fa fa-audio-description",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 13,
  icon1: "fa fa-area-chart",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 14,
  icon1: "fa fa-asterisk",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 15,
  icon1: "fa fa-bomb",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 16,
  icon1: "fa fa-book",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 17,
  icon1: "fa fa-bullseye",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 18,
  icon1: "fa fa-camera",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 19,
  icon1: "fa fa-cc",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 20,
  icon1: "fa fa-certificate",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 21,
  icon1: "fa fa-coffee",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 22,
  icon1: "fa fa-commenting",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 23,
  icon1: "fa fa-cogs",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 24,
  icon1: "fa fa-database",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 25,
  icon1: "fa fa-envelope",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 26,
  icon1: "fa fa-eyedropper",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 27,
  icon1: "fa fa-fire",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 28,
  icon1: "fa fa-hashtag",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 29,
  icon1: "fa fa-magnet",
  icon2: "fa fa-question",
  verified: false
}, {
  id: 30,
  icon1: "fa fa-map",
  icon2: "fa fa-question",
  verified: false
}
];

function App() {
  const [images, setImages] = useState(dataArr);
  // const [guessNum, setGuessNum] = useState(2);
  const [guessNum, setGuessNum] = useState(Math.floor(Math.random() * 30) + 1);
  const [radmNum, setRadmNum] = useState([guessNum]);
  const [point, setPoint] = useState(0);

  console.log("guessNum ==>> ", guessNum);

  const checkImage = (imageId) => {
    if (imageId !== guessNum) {
      alert("Not match, Try once again !!");
      return;
    }
    const updatedArr = images.map((item) => {
      if (item.id === guessNum && imageId === guessNum) {
        return { ...item, verified: true };
      } else {
        return item;
      }
    });
    setPoint(point + 1);
    let newNum = Math.floor(Math.random() * 30) + 1;
    if (!radmNum.includes(newNum)) {
      manageNumberValue(newNum, updatedArr)
    } else {
      let newNum = Math.floor(Math.random() * 30) + 1;
      manageNumberValue(newNum, updatedArr)
    }
  }

  const manageNumberValue = (newNum, updatedArr) => {
    setRadmNum([...radmNum, newNum]);
    setImages(updatedArr);
    setGuessNum(newNum);
  }

  return (
    <div className="App">
      <h3>Win Points: {point}</h3>
      <Box sx={{ flexGrow: 1 }}>
        <Grid className='grid-div' container spacing={2}>
          {
            images.length > 0 ? images.map((image) => (
              <Grid key={`image_${image.id}`} className='card' item xs={2}>
                <span onClick={() => checkImage(image.id)}>
                  <i className={image.verified ? image.icon1 : image.icon2} aria-hidden="true"></i>
                </span>
              </Grid>
            )) : "Please wait"
          }
        </Grid>
      </Box>
    </div>
  );
}

export default App;
