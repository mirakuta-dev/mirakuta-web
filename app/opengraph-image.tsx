import { ImageResponse } from "next/og";

export const alt = "mirakuta — Windows dev setup, done right.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1E1B4B",
          padding: "96px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "32px",
            marginBottom: "56px",
          }}
        >
          <div
            style={{
              position: "relative",
              width: 160,
              height: 160,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: 96,
                height: 96,
                background: "#818CF8",
                transform: "rotate(45deg)",
                borderRadius: 10,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: 58,
                height: 58,
                background: "#1E1B4B",
                transform: "rotate(45deg)",
                borderRadius: 5,
                display: "flex",
              }}
            />
            <div
              style={{
                position: "relative",
                fontFamily: "monospace",
                fontWeight: 700,
                fontSize: 34,
                color: "#C7D2FE",
                display: "flex",
                marginTop: -2,
              }}
            >
              {">_"}
            </div>
          </div>

          <span
            style={{
              fontSize: 84,
              fontWeight: 500,
              color: "#C7D2FE",
              letterSpacing: "-0.03em",
            }}
          >
            mirakuta
          </span>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 500,
            color: "#FFFFFF",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
            textAlign: "center",
            maxWidth: "900px",
            textWrap: "balance",
          }}
        >
          Windows dev setup, done right.
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#C7D2FE",
            opacity: 0.75,
            marginTop: "28px",
            textAlign: "center",
            maxWidth: "820px",
            textWrap: "balance",
          }}
        >
          One command. Everything you need. Nothing you don&apos;t.
        </div>

        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: 48,
            left: 0,
            right: 0,
            justifyContent: "center",
            fontSize: 22,
            fontFamily: "monospace",
            color: "#818CF8",
          }}
        >
          mirakuta.dev
        </div>
      </div>
    ),
    { ...size },
  );
}
