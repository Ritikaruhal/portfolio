import React from "react";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 text-center">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm Ritika Ruhal</h1>
        <p className="text-lg text-gray-700 mb-6">
          A passionate developer and technology enthusiast with a focus on web development.
        </p>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mt-4">About Me</h2>
          <p className="text-gray-600 p-4">
            I am a final-year Computer Science student with a keen interest in frontend development and open-source projects. I've worked on several academic and personal projects using HTML, CSS, JavaScript, React, and Flask.
          </p>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mt-4">Projects</h2>
          <ul className="list-disc list-inside p-4 text-left">
            <li><strong>Emotion Detector:</strong> A Flask + React based app to detect user emotion and suggest music or videos.</li>
            <li><strong>BookMart:</strong> A web app for book recommendations built with HTML, CSS, and JavaScript.</li>
            <li><strong>Compiler Design Lab Tools:</strong> Tools for regex recognition, DFA construction, LL(1) and LR parser generation, etc.</li>
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mt-4">Skills</h2>
          <ul className="list-disc list-inside p-4 text-left">
            <li>Languages: C, C++, Python, JavaScript</li>
            <li>Web: HTML, CSS, React, Flask</li>
            <li>Tools: Git, GitHub, VS Code</li>
          </ul>
        </Card>

        <Card className="mb-6">
          <h2 className="text-2xl font-semibold mt-4">Contact</h2>
          <p className="p-4 text-gray-700">
            📧 Email: ritikaruhal@example.com<br />
            🔗 GitHub: <a className="text-blue-600" href="https://github.com/ritikaruhal" target="_blank" rel="noreferrer">github.com/ritikaruhal</a>
          </p>
        </Card>

        <Button className="mt-4">Download Resume</Button>
      </section>
    </main>
  );
}
