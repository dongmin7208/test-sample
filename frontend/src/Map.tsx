import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GMAPS_KEY!,
  });
  if (!isLoaded) return <div>..</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "600px" }}
      center={{ lat: 35.73437, lng: 139.680929 }}
      zoom={12}
    >
      <Marker position={{ lat: 35.73437, lng: 139.680929 }} />
    </GoogleMap>
  );
}
