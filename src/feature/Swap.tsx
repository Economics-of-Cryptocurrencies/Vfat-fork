import Layout from "../component/Layout";

function Swap() {
  return (
    <Layout>
      <div className="pt-[3rem] flex flex-col items-center justify-center w-full h-full min-h-[calc(100vh)]">
        <div className="flex-1 w-full px-[0.25rem] sm:px-0 pb-0 md:pb-[3.5rem]">
          <div className="px-2 w-full min-h-[calc(100vh-7.5rem)] flex flex-col items-center justify-center pb-8">
            <div className="flex items-center justify-center gap-2 max-w-[200px] w-full">
              <div className="flex items-center justify-center gap-2 h-full">
                <div className="flex gap-4">
                  <div className="bg-card text-card-foreground rounded-lg border shadow sm:min-w-[450px]">
                    card1
                  </div>
                  <div className="bg-card text-card-foreground rounded-lg border shadow sm:min-w-[450px]">
                    card1
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Swap;
