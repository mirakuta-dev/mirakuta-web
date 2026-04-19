import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1E1B4B",
        }}
      >
        <div
          style={{
            position: "relative",
            width: 512,
            height: 512,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: 340,
              height: 340,
              background: "#818CF8",
              transform: "rotate(45deg)",
              borderRadius: 32,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: 204,
              height: 204,
              background: "#1E1B4B",
              transform: "rotate(45deg)",
              borderRadius: 18,
              display: "flex",
            }}
          />
          <div
            style={{
              position: "relative",
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 128,
              color: "#C7D2FE",
              display: "flex",
              marginTop: -6,
            }}
          >
            {">_"}
          </div>
        </div>
      </div>
    ),
    { width: 512, height: 512 },
  );
}
