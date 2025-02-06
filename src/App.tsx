import './App.css'

interface BoxProps {
  width: number | string;
  height: number | string;
  backgroundColor: string;
  borderColor: string;
  text: string;
}

const Box: React.FC<BoxProps> = ({ width, height, backgroundColor, borderColor, text }) => {
  const boxStyle: React.CSSProperties = {
    width,
    height,
    backgroundColor,
    border: `3px solid ${borderColor}`,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: 'black',
    fontSize: '20px',
  };

  return <div style={boxStyle}>{text}</div>;
};

const App: React.FC = () => {
  return (
    <div className='Main'>
      <h1>Ernz Danielle Manalo</h1>
      <div className='BoxContainer'>
        <Box
          width="200px"
          height="200px"
          backgroundColor="pink"
          borderColor="black"
          text="CPEITEL"
        />
      </div>
    </div>
  );
};

export default App;
