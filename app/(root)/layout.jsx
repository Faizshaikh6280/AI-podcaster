import LeftSidebar from "../_components/LeftSidebar";
import RightSidebar from "../_components/RightSidebar";

function layout({ children }) {
  return (
    <div className="flex">
      <LeftSidebar />
      <main className="grow bg-white-6 dark:bg-black-1 h-screen">
        {children}
      </main>
      <RightSidebar />
    </div>
  );
}

export default layout;
