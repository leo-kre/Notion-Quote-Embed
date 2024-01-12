"use client";

import { useEffect, useState } from "react";

export default function Home() {
      const [quote, setQuote] = useState({ text: "Test Quote", author: "Test Author" });

      useEffect(() => {
            fetch("https://type.fit/api/quotes")
                  .then((response) => response.json())
                  .then((data) => {
                        setQuote({ text: data[0].text, author: data[0].author.replace(", type.fit", "") });
                  });
      }, []);

      const [bgColor, setBgColor] = useState("#FFFFFF");
      const [textColor, setTextColor] = useState("#000000");
      const [accentColor, setAccentColor] = useState("#8d5bc1");

      return (
            <div className="w-full min-h-screen flex">
                  <div className="p-12 flex flex-col text-xl">
                        <h1 className="text-2xl font-bold ">Generate Quote Embed for Notion</h1>
                        <div className={"p-10 py-5"} style={{ background: `${bgColor}` }}>
                              <h1 className={`text-xl font-extrabold`} style={{ color: `${textColor}` }}>
                                    {quote.text}
                              </h1>
                              <h2 className={`text-lg font-semibold`} style={{ color: `${accentColor}` }}>
                                    {"~" + quote.author}
                              </h2>
                        </div>

                        <div className="p-2 m-2 mx-0 border">
                              <div className="flex flex-row gap-5">
                                    <h1>Background Color: </h1>
                                    <input
                                          type="color"
                                          onChange={(data: any) => {
                                                setBgColor(data.currentTarget.value);
                                          }}
                                    ></input>
                              </div>

                              <div className="flex flex-row gap-5">
                                    <h1>Text Color: </h1>
                                    <input
                                          type="color"
                                          onChange={(data: any) => {
                                                setTextColor(data.currentTarget.value);
                                          }}
                                    ></input>
                              </div>

                              <div className="flex flex-row gap-5">
                                    <h1>Accent Color: </h1>
                                    <input
                                          type="color"
                                          onChange={(data: any) => {
                                                setAccentColor(data.currentTarget.value);
                                          }}
                                    ></input>
                              </div>
                        </div>
                        <a href={"/Embed?bg=" + bgColor.replace("#", "") + "&text=" + textColor.replace("#", "") + "&accent=" + accentColor.replace("#", "")}>Get Link</a>
                  </div>
            </div>
      );
}
