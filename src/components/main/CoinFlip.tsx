function CoinFlip() {
  return (
    <section className="coin-flip">
      <h3>Coin Flip</h3>


        <div className="container">
          <div className="coin">
            <div className="face front">
              <div className="image-container">
                <img src="https://placehold.co/150x150/yellow/green?text=one" alt="" />
              </div>
              <div className="circle"></div>
            </div>
            <div className="face back">
              <div className="image-container">
                <img src="https://placehold.co/150x150/orange/red?text=two" alt="" />
              </div>
              <div className="circle"></div>
            </div>

            {Array.from({ length: 180 }).map((_, index) => (
              <figure key={index} className="side"></figure>
            ))}
          </div>
        </div>

    </section>
  );
}

export default CoinFlip;
