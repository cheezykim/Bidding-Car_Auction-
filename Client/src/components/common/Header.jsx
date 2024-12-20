import { Container } from "./Design";

export const Header = () => {
  return (
    <>
      <header className="header py-1 bg-blue-900 text-white">
        <Container>
          <nav className="p-4 flex justify-between items-center relative">
            <div className="flex items-center gap-14">
              <div>
                <img src="../image/common/auction_32px.png" alt="Logo" className="h-11" />
              </div>
              <div className="text-lg font-bold">
                <h1>Car Auction</h1>
              </div>
            </div>
            <div>
              <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-all">
                Start Bidding
              </button>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};
