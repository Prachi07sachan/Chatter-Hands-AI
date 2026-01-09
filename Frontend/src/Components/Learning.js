function Learning() {
  const topics = [
    "Sign Language Alphabets",
    "Common Daily Gestures",
    "Basic Conversations",
  ];

  return (
    <section className="learning">
      <h2>What You’ll Learn</h2>

      <div className="learning-grid">
        {topics.map((topic, index) => (
          <div className="learning-card" key={index}>
            {topic}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Learning;
