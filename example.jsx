import React, { useState } from 'react';
import Loadable from 'react-loadable';
import Loader from 'components/Loader';

const SomeComponent = Loadable({
loader: () => import('components/SomeComponent'),
loading: Loading
});

const App = () => {
const [showComponent, setShowComponent] = useState(false);

return (
if (showComponent) {
return <SomeComponent />
} else {
return (
<>
<h1>Hello word!</h1>
<button onClick={() => setShowComponent(true)}>Click me!</button>
</>
)
}
)}

export default App;