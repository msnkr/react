import {
  ReactionSummary,
  MemorySummary,
  VerbalSummary,
  VisualSummary,
} from "./images/components/Summaries";

function App() {
  return (
    <div>
      <div className="main font-customFont lg:flex lg:justify-center lg:mt-[200px] items-center lg:mx-auto lg:rounded-xl lg:w-[1000px] lg:shadow-2xl">
        <div className="section-1">
          <div
            className="results-section text-center bg-gradient-to-t from-light-royal-blue-background 
          to-light-slate-blue-background px-12 py-4 text-pale-blue rounded-b-[50px] lg:rounded-xl lg:h-[500px] lg:flex flex-col lg:justify-center lg:space-y-8 lg:w-[400px]"
          >
            <p className="text-xl">Your Result</p>
            <div
              className="score bg-gradient-to-t from-light-slate-blue-background to-light-royal-blue-background 
            rounded-full w-[150px] h-[150px] flex flex-col justify-center mx-auto my-4 "
            >
              <h2 className="text-6xl mb-2">76</h2>
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
          <div className="summary px-8 my-4 lg:h-[500px] lg:w-[400px] lg:flex flex-col lg:justify-center">
            <p className="text-2xl text-dark-gray-blue">Summary</p>
            <div className="summaries mt-4 space-y-2">
              <ReactionSummary score={22} />
              <MemorySummary score={32} />
              <VerbalSummary score={75} />
              <VisualSummary score={45} />
            </div>
            <div className="button-div mt-4">
              <button className="bg-dark-gray-blue w-full py-2 text-white text-2xl rounded-full">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
