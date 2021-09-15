import React, {useEffect, useState} from 'react';
import { View ,ActivityIndicator} from 'react-native';
import MapboxGL,{OfflineCreatePackOptions} from '@react-native-mapbox-gl/maps';
import styles from './Map.styles';
import Geolocation from 'react-native-geolocation-service';

MapboxGL.setAccessToken('pk.eyJ1IjoieXVyaWlvbCIsImEiOiJja3M4cjhvNTYxZGR4Mm9zM3dhd2Ywc3h5In0.Oq0TD2CawcodBDlbNcd3LA');
// const progressListener = (offlineRegion, status) => console.log(offlineRegion, status);
// const errorListener = (offlineRegion, err) => console.log(offlineRegion, err);
// (async ()=>{
//     await MapboxGL.offlineManager.createPack({
//         name: 'offlinePack',
//         styleURL: 'mapbox://...',
//         minZoom: 14,
//         maxZoom: 20,
//         bounds: [[neLng, neLat], [swLng, swLat]]
//     }, progressListener, errorListener)
// }),())

const Map = () => {
    const [coordinate,setCoordinate] = useState([])
    const [zoom,setZoom] = useState(0)
    // async function tyt (){
    //     const progressListener = (offlineRegion, status) => console.log(offlineRegion, status);
    //     const errorListener = (offlineRegion, err) => console.log(offlineRegion, err);
    //
    //     await MapboxGL.offlineManager.createPack({
    //         name: 'offlinePack',
    //         styleURL: 'mapbox://...',
    //         minZoom: 14,
    //         maxZoom: 20,
    //         bounds: [[ 37.4219983,  -122.084], [ 37.4219983,  -122.084]]
    //     }, progressListener, errorListener)
    // }
    useEffect(()=>{
        // if (hasLocationPermission) {
            Geolocation.getCurrentPosition(
                (position) => {
                    const {latitude,longitude,accuracy} =position.coords
                    setZoom(accuracy)
                    setCoordinate([longitude,latitude])
                },
                (error) => {
                    // See error code charts below.
                    console.log(error.code, error.message);
                },
                { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
            );
        // }
        // await  tyt()
    },[])
    return(
            <View style={styles.container}>
                {!coordinate.length>0?<ActivityIndicator size="large" />
                :<MapboxGL.MapView style={styles.map}
                                  styleURL={'mapbox://styles/mapbox/satellite-v9'}>
                    <MapboxGL.Camera
                        zoomLevel={15}
                        centerCoordinate={[...coordinate]}
                    />
                </MapboxGL.MapView>}
            </View>
    );
};

export default Map;
