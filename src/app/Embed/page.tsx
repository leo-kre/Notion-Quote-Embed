"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Embed() {
      const searchParams = useSearchParams();

      const bgColor = "#" + searchParams.get("bg");
      const textColor = "#" + searchParams.get("text");
      const accentColor = "#" + searchParams.get("accent");

      const [quote, setQuote] = useState({ text: "Test Quote", author: "Test Author" });

      useEffect(() => {
            fetch("https://type.fit/api/quotes")
                  .then((response) => response.json())
                  .then((data) => {
                        setQuote({ text: data[0].text, author: data[0].author.replace(", type.fit", "") });
                  });
      }, []);

      return (
            <div style={{ background: `${bgColor}` }}>
                  <div className={"p-10 pl-5 py-5 min-h-screen flex flex-col justify-center border-2 border-[#252525] rounded-md"}>
                        <h1 className={`text-3xl font-extrabold mb-2`} style={{ color: `${textColor}` }}>
                              {quote.text}
                        </h1>
                        <h2 className={`text-lg font-semibold`} style={{ color: `${accentColor}` }}>
                              {"~" + quote.author}
                        </h2>
                  </div>
            </div>
      );
}
