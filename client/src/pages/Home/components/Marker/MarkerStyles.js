const K_WIDTH = 40;
const K_HEIGHT = 40;

const MarkerStyles = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid rgba(56, 42, 100, 0.75)',
  borderRadius: K_HEIGHT,
  backgroundColor: 'rgba(56, 42, 100, 0.75)',
  textAlign: 'center',
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4
};

const MarkerHover = {
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  borderRadius: K_HEIGHT,
  textAlign: 'center',
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
  border: '5px solid rgba(237, 70, 72, 0.75)',
  backgroundColor: 'rgba(237, 70, 72, 0.75)'
};

export { MarkerStyles, MarkerHover };