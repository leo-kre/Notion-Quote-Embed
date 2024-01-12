"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Embed() {
      const searchParams = useSearchParams();

      const bgColor = "#" + searchParams.get("bg");
      const textColor = "#" + searchParams.get("text");
      const accentColor = "#" + searchParams.get("accent");

      const [quote, setQuote] = useState({ text: "It is only when we take chances, when our lives improve. The initial and the most difficult risk that we need to take is to become honest", author: "~Walter Anderson" });

      useEffect(() => {
            fetch("https://type.fit/api/quotes")
                  .then((response) => response.json())
                  .then((data) => {
                        setQuote({ text: data[0].text, author: "~" + data[0].author.replace(", type.fit", "") });
                  });
      }, []);

      return (
            <div className={"p-10 pl-5 py-5 min-h-screen flex flex-col justify-center"} style={{ background: `${bgColor}` }}>
                  <h1 className={`text-xl md:text-3xl font-extrabold mb-2`} style={{ color: `${textColor}` }}>
                        {quote.text}
                  </h1>
                  <h2 className={`text-lg font-semibold`} style={{ color: `${accentColor}` }}>
                        {quote.author}
                  </h2>
            </div>
      );
}
