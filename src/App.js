// # This Pattern describes memoing components successfully (Delete unused code)
// Read https://blog.solutotlv.com/react-class-to-hooks/ for how to translate more finegrained functionality from classes to hooks!
// Optimizations https://medium.freecodecamp.org/yeah-hooks-are-good-but-have-you-tried-faster-react-components-e698a8db468c


// Memo!
// const Bar = React.memo(function Bar({name}) {
//   return <h1>{name}</h1>;
// });

import React from 'react';
import Base from './Base';

function App() {
  // const imagePaths = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
  return  <Base />
}

export default App
