import React from "react";
import Image from "next/image";

const About = () => {
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
      <div className="max-w-3xl mx-auto my-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Company Overview</h1>
        <p className="text-lg leading-7 mb-4">
          As the sole franchise holder of the KFC brand in Indonesia, PT Fast
          Food Indonesia Tbk was founded in 1978 by the Gelael Family. In 1979,
          the Company acquired the franchise with the opening of the very first
          restaurant outlet in October at Jalan Melawai in Jakarta. The first
          outlet proved to be successful and paved the way for the opening of
          more additional outlets in Jakarta and expansion of its regional
          coverage to include other major cities in Indonesia, like Bandung,
          Semarang, Surabaya, Medan, Makassar, and Manado. With continuous
          success in building the brand, KFC was instilled in the mind of
          customers becoming a by-word and a dominant brand in the fast-food
          franchise business in Indonesia.
        </p>
        <p className="text-lg leading-7 mb-4">
          With the entry of Salim Group in 1990 as one of the major
          shareholders, Company's expansion initiatives were reinforced, and in
          1993, the Company became publicly-listed with Jakarta Stock Exchange
          (now Indonesia Stock Exchange) to further enhance its development
          growth. The present majority shareholding of 80% is distributed 43.84%
          to PT Gelael Pratama, owned by the Gelael Group, and 35.84% to PT
          Megah Eraraharja, a company under the Salim Group; while the minority
          (20%) is shared by the Public and Cooperatives.
        </p>

        <div className="mb-4">
          <Image src="/map.jpg" alt="Company Map" width={600} height={400} />
        </div>

        <p className="text-lg leading-7 mb-4">
          The Company was given the license to use the KFC brand by its present
          franchisor, Yum! Asia Franchise Pte Ltd, which is part of Yum!
          Restaurants International (YRI). YRI itself is a company under Yum!
          Brands Inc, a publicly-listed company in the U.S. and the franchise
          owner of four other well-known brands, i.e. Pizza Hut, Taco Bell, A&W,
          and Long John Silvers. However, by the end of 2011, the two other
          brands, A&W and Long John Silvers, were dropped from Yum! Brands Inc.
          Even with the exclusion of these two brands, the Yum! Group is still
          regarded as the largest fast food chain in the world and the best in
          providing branded restaurant choices worldwide. Furthermore, in the
          chicken-based fast-food chain, however, no other brand can beat KFC.
        </p>
      </div>
    </div>
  );
};

export default About;
