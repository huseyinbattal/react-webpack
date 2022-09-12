import React from "react";
import HelloWorld from "Components/HelloWorld";
import image from "Base/assets/assets"


const App = () => {
    return (
        <div>
            App dosyası
            <img src={image} />
            <HelloWorld/>
        </div>
    )
}

export default App;