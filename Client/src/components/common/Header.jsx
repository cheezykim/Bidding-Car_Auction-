import { Container, CustomNavLinkList } from "./Design";
import { menulists } from "../../assets/Data";

export const Header = () => {
  return (
    <>
      <header className="header py-1 bg-blue-900 text-white">
        <Container>
          <nav className="p-4 flex justify-between items-center relative">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-4">
                <img
                  src="../image/common/camping_logo.png"
                  alt="Logo"
                  className="h-11"
                />
                <h1 className="text-lg font-bold hover:text-red-500 transition-all">Car Auction</h1>
              </div>

              {/* Menu List */}
              <ul className="hidden lg:flex items-center justify-between gap-8">
                {menulists.map((list, index) => (
                  <li key={index} className="capitalize list-none">
                    <CustomNavLinkList href={list.path}>
                      {list.link}
                    </CustomNavLinkList>
                  </li>
                ))}
              </ul>
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
