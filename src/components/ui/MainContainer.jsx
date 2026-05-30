function MainContainer({ className = "", children }) {
  return (
    <div className={`main-container max-w-[1280px] mx-auto px-8 ${className}`}>
      {children}
    </div>
  );
}

export default MainContainer;
