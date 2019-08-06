import React from 'react';
import AboutImg from '../../../static/assets/images/ShieldHero.jpg';


export default function () {
    return (
        <div className="side-by-side-wrapper">
            <div className="left-column"
                style={{
                    backgroundImage: `url(${AboutImg})`
                }}
            >
            </div>
            <div className="right-column">
                <div className="title-wrapper">
                    <h1>About This Blog</h1>
                </div>
                <div className="text-wrapper">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sit amet eros posuere, congue diam non, pulvinar sem. Nullam vel gravida neque, eu faucibus turpis. Integer at sapien quam. Pellentesque magna quam, elementum sit amet congue sit amet, vulputate nec dolor. Suspendisse potenti. Vivamus elementum odio at metus euismod auctor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                    Quisque interdum dui id aliquam tempus. Nullam interdum consequat mauris eu maximus. Ut ac euismod lorem. Pellentesque non metus mattis, blandit ante quis, tincidunt nisl. Ut augue dui, vehicula a placerat quis, feugiat a enim. Pellentesque pellentesque, tellus a vulputate vehicula, odio odio placerat tortor, sit amet sodales enim sem sit amet orci. Etiam tincidunt, nibh in iaculis sollicitudin, turpis arcu auctor quam, at 
                    lacinia dolor at turpis posuere, nec ullamcorper lectus maximus. Nam et enim et lectus semper vehicula lacinia ut risus. In semper erat ac mauris porta, nec pellentesque ex ornare. Donec nibh odio, porttitor vitae hendrerit eget, venenatis sit amet nisl. Praesent dignissim ligula eget dictum convallis. Curabitur commodo non elit at accumsan. Nulla imperdiet enim a turpis pretium ornare. Fusce ac neque.
                </div>
            </div>
        </div>
    );
}