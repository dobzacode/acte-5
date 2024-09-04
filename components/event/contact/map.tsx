'use client';

export default function Map() {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

  return (
    <iframe
      width="100%"
      height="100%"
      style={{ border: '0', borderRadius: '4px', flexShrink: 0 }}
      loading="lazy"
      src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=place_id:0pxChIJBz9mjQTJlkcRwjVO-2tkrME&language=fr`}
    ></iframe>
  );
}
