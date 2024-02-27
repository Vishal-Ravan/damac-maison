import React, { useEffect } from "react";
import logoth from "../assets/black.png";

const Thankyou = () => {
  useEffect(() => {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod
          ? n.callMethod.apply(n, arguments)
          : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = "2.0";
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(
      window,
      document,
      "script",
      "https://connect.facebook.net/en_US/fbevents.js"
    );
    fbq("init", "1058152615222147");
    fbq("track", "PageView");
    <noscript>
      <img
        height="1"
        width="1"
        style="display:none"
        src="https://www.facebook.com/tr?id=1058152615222147&ev=PageView&noscript=1"
      />
    </noscript>;
  }, []);

  return (
    <>
      <div
        className="thank"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
          height: "100vh",
        }}
      >
        <img src={logoth} alt="" width={220} />
        <h2 style={{ color: "#000", textAlign: "center" }}>
          Thank you <br />
          Your data has been submitted successfully
        </h2>
      </div>
    </>
  );
};

export default Thankyou;
