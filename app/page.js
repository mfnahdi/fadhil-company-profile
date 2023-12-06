import Link from "next/link";
import MySlider from "./components/MySlider";

import "@fortawesome/fontawesome-svg-core/styles.css";

export default function Home() {
  const title = "kentucky fried chicken";

  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        overflowX: "hidden",
        position: "relative",
        backgroundImage: "url('patt.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "black",
          zIndex: 2,
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            margin: "0",
            fontFamily: "Permanent Marker, sans-serif",
            fontWeight: "bold",
          }}
        >
          {title.split(" ").map((word, index) => (
            <span key={index}>
              <span style={{ color: "red" }}>{word[0]}</span>
              {word.slice(1)}{" "}
            </span>
          ))}
        </h1>
        <h2
          style={{
            fontSize: "40px",
            fontFamily: "ephesis",
            color: "red",
          }}
        >
          "it's finger lickin' good"
        </h2>
        <p style={{ fontSize: "20px" }}>
          Provide the most modern and trendy store appearance and design
          offering good ambiance with the most comfortable seating by
          continuously undertaking renovation and serving top-quality food
          suited to customers' preferential taste with speed and hospitality
          beyond compare.
        </p>
        <Link href="/about" passHref>
          <button
            style={{
              padding: "10px 20px",
              fontSize: "18px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px",
              position: "relative",
              zIndex: 1,
            }}
          >
            about us
          </button>
        </Link>
      </div>

      <div style={{ position: "relative", zIndex: 1, marginTop: "550px" }}>
        <MySlider />
      </div>

      <div
        style={{ position: "absolute", bottom: 0, width: "100%", zIndex: 1 }}
      >
        <div>
          <video
            width="600px"
            height="600px"
            controls
            style={{
              display: "flex",
              marginLeft: "800px",
              marginBottom: "263px",
            }}
          >
            <source src="/super.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </main>
  );
}
