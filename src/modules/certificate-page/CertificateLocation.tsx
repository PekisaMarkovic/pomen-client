"use client";

import { Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { LocationPoint } from "@/interfaces/general";
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin
} from "@vis.gl/react-google-maps";
import { useCallback } from "react";

type CertificateLocationProps = {
  location: LocationPoint;
};

const CertificateLocation = ({ location }: CertificateLocationProps) => {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  const position = { lat: location.y, lng: location.x };
  const { t } = useCustomTranslation();

  const handleClickOnPin = useCallback(() => {
    if (!location?.x || !location?.y) return;

    const url = `http://maps.google.co.uk/maps?q=${location.y},${location.x}`;
    window.open(url, "_blank");
  }, [location]);

  return (
    <section aria-labelledby="map-location" className="pb-8 px-6">
      {key && (
        <APIProvider apiKey={key}>
          <div className="mx-auto h-96 w-full sm:w-96">
            <Map
              zoom={15}
              center={position}
              mapId={process.env.NEXT_PUBLIC_MAP_ID}
            >
              <AdvancedMarker position={position} onClick={handleClickOnPin}>
                <Pin
                  background={"grey"}
                  borderColor={"green"}
                  glyphColor={"purple"}
                />
              </AdvancedMarker>
            </Map>
          </div>
        </APIProvider>
      )}
      <Paragraph
        text={t(TranslationsEnums.CERTIFICATE, "location-info")}
        color="grey"
        size="xs"
        preWrap
        className="mx-auto mt-2 text-center"
      />
    </section>
  );
};

export default CertificateLocation;
