function App() {
  return (
    <div>
      <div className="main font-customFont">
        <div className="section-1">
          <div className="results-section text-center bg-gradient-to-t from-light-royal-blue-background to-light-slate-blue-background px-8 py-4 text-white">
            <p>Your Result</p>
            <div className="score">
              <h2>76</h2>
              <p>of 100</p>
            </div>
            <h2>Great</h2>
            <p>
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="section-2"></div>
      </div>
    </div>
  );
}

export default App;
