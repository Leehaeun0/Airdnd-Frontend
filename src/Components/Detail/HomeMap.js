import React from 'react';
import styled from 'styled-components';
import '../../style/HomeMap.css';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';
import MarkerWithLabel from 'react-google-maps/lib/components/addons/MarkerWithLabel';

const HomeMap = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCqryK5lMUxY0i_-Zu1cUrgW3_Geg4BrWA&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '480px', position: 'relative' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(({ children, location, zoom }) => {
  console.log(window);
  return (
    <GoogleMap
      zoom={zoom}
      defaultCenter={location}
      options={{
        scrollwheel: false,
        fullscreenControl: false,
        mapTypeControl: false,
        zoomControl: false,
      }}
    >
      {children}
      <MarkerWithLabel
        position={location}
        icon={{
          scale: 0,
          path: '',
        }}
        labelAnchor={new window.google.maps.Point(0, 0)}
        labelStyle={{
          transform: 'translate(-50%, -50%)',
          width: '48px',
          height: '48px',
        }}
      >
        <StHomeIconWapper>
          <svg
            viewBox="0 0 24 24"
            role="presentation"
            aria-hidden="true"
            focusable="false"
          >
            <path d="m8 10.5005941c0-.82930697.67155309-1.5005941 1.5-1.5005941.8284469 0 1.5.67128713 1.5 1.5005941 0 .8281188-.6715531 1.4994059-1.5 1.4994059-.82844691 0-1.5-.6712871-1.5-1.4994059zm4.1667406-8.44681501c-.0992881-.07170545-.2338787-.07170545-.3331668 0l-8.41742741 5.00062819c-.45120941.32653562-.55049754.95644047-.2239499 1.4065301.19636987.27358389.50416308.41699481.8152659.41699481h1.46063878v10.83083331c0 .1610615.13017777.2912345.29234839.2912345h5.80394304c.1246618 0 .2250531-.1003876.2250531-.2250448v-4.6983621c0-.8108233.8803548-1.4683071 1.6912079-1.4683071s1.7485744.6574838 1.7485744 1.4683071v4.6983621c0 .1246572.1014945.2250448.2250531.2250448h2.786687c.1610674 0 .2923483-.130173.2923483-.2912345v-10.83083331l1.4804964-.00006898c.3033805 0 .6023481-.1499609.7943051-.41692583.3265477-.45008963.2261563-1.07999448-.2239499-1.4065301z"></path>
          </svg>
          <svg
            aria-hidden="true"
            role="presentation"
            focusable="false"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
          </svg>
        </StHomeIconWapper>
      </MarkerWithLabel>
    </GoogleMap>
  );
});

export default HomeMap;

const StHomeIconWapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  background-color: #000000;
  border-radius: 50%;
  color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 0px 0px 1px inset,
    rgba(0, 0, 0, 0.18) 0px 1px 2px;

  svg:nth-of-type(1) {
    height: 28px;
    width: 28px;
    fill: #ffffff;
  }
  svg:nth-of-type(2) {
    position: absolute;
    top: -1px;
    right: 0;
    fill: #ff385c;
    height: 16px;
    width: 16px;
    stroke: #ffffff;
    stroke-width: 8;
    overflow: visible;
    paint-order: stroke;
  }
`;
