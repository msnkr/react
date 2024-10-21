function App() {
  return (
    <div>
      <div className="main font-customFont">
        <div className="section-1">
          <div className="results-section text-center bg-gradient-to-t from-light-royal-blue-background to-light-slate-blue-background px-12 py-4 text-white rounded-b-[50px]">
            <p>Your Result</p>
            <div className="score bg-gradient-to-t from-light-slate-blue-background to-light-royal-blue-background rounded-full w-[150px] h-[150px] flex flex-col justify-center mx-auto my-4 ">
              <h2 className="text-6xl font-semibold mb-2">76</h2>
              <p className="text-md">of 100</p>
            </div>
            <h2 className="my-2 text-3xl">Great</h2>
            <p className="w-[300px] mx-auto">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>
        <div className="section-2">
          <div className="summary px-8 my-4">
            <p className="text-lg font-semibold">Summary</p>
            <div className="summaries"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
