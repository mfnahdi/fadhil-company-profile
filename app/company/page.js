import Image from "next/image";

const Company = () => {
  return (
    <div
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
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Image src="/page871.jpg" width={900} height={900} alt="" />
      </div>
    </div>
  );
};

export default Company;
