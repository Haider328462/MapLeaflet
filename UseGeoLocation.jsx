import React from 'react'
import { useState,useEffect } from 'react'


// this code is to track your current location 

const UseGeoLocation = () => {

    const [location, setLocation] = useState({ 
        loaded: false,
        coordinates: {lat:'',lng:''},
        error: null
    });

    const onSuccess = (position) => {
        setLocation({
            loaded: true,
            coordinates: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            },
            error: null,
        })
    }

    const onError = (error) => {
        setLocation({
            loaded: true,
            coordinates: {lat:'', lng:''},
            error,
        })
    }

    useEffect(() => {
      if( !("geolocation" in navigator) ){
        onError({
            code:0,
            message: 'Geolocation not supported',
        })
        return;
      }

      navigator.geolocation.getCurrentPosition(onSuccess, onError);
      
    }, [])
    
  return location;
}

export default UseGeoLocation