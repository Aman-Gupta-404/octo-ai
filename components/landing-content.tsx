"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const testimonials = [
  {
    name: "John",
    avatar: "J",
    title: "Content writer",
    description: "Best application I have used for my content writing job!",
  },
  {
    name: "Lucy",
    avatar: "L",
    title: "Sowtware Developer",
    description: "This application has made me more effecient in writing code.",
  },
  {
    name: "Adam",
    avatar: "A",
    title: "Marketing head",
    description:
      "Great application, I can generate contents for my marketing campaings very easily",
  },
  {
    name: "David",
    avatar: "D",
    title: "Student",
    description: "Great application to get my assignments done.",
  },
];

function LandingContent() {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default LandingContent;
