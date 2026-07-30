import { ImageResponse } from "next/og";

export const alt = "Equip Contract - Fabricación contract B2B en Barcelona";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #0b0e0c 0%, #151914 58%, #213016 100%)",
          color: "#f8f8f4",
          display: "flex",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 28, width: "100%" }}>
          <div style={{ color: "#95c83d", fontSize: 26, fontWeight: 700, letterSpacing: 5 }}>
            PARTNER INDUSTRIAL B2B · BARCELONA
          </div>
          <div style={{ fontSize: 78, fontWeight: 700, letterSpacing: -2, lineHeight: 0.98 }}>
            Fabricación contract confidencial
          </div>
          <div style={{ color: "#d9d5ca", fontSize: 32, lineHeight: 1.35, maxWidth: 850 }}>
            OEM, white-label y mobiliario a medida para distribuidores, estudios y marcas.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
