import React from "react";
import "./Certificates.scss";

const Certificates = () => {
  return (
    <div className={"certificates-container"}>
      <header>
        <div className="certificates-header-image"></div>
        <div className="certificates-header-title">
          <h1>Certyfikaty</h1>
        </div>
      </header>
      <article className={"container"}>
        <div className={"row small-container"}>
          <i className={"icon-doc-text"} />
          <div>
            <p className={"p-header"}>
              Specjalizujemy się w przewozach odpadów na terenie UE, szczególnie
              w takich krajach jak Włochy, Niemcy, Austria, Holandia, Belgia.{" "}
            </p>
            <p className={"p-header"}>
              Posiadamy szereg pozwoleń umożliwiający przewóz odpadów oraz
              ładunków ADR.
            </p>
            <p className={"p-header"}>
              Po więcej informacji zapraszamy do kontaktu.
            </p>
          </div>
        </div>
        <div className="bar" />
        {/* <div className="row">
                    <div className="certificates-card">
                        <div className="certificates-image albo">ALBO</div>
                        <div className="certificates-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, repellat.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eos illum in itaque iure
                            omnis perferendis perspiciatis repudiandae veniam voluptatem.
                        </div>
                    </div>

                    <div className="certificates-card">
                        <div className="certificates-image abfall">A</div>
                        <div className="certificates-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, repellat.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eos illum in itaque iure
                            omnis perferendis perspiciatis repudiandae veniam voluptatem.
                        </div>
                    </div>

                    <div className="certificates-card">
                        <div className="certificates-image adr"></div>
                        <div className="certificates-content">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, repellat.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae eos illum in itaque iure
                            omnis perferendis perspiciatis repudiandae veniam voluptatem.
                        </div>
                    </div>

                </div> */}
      </article>
    </div>
  );
};

export default Certificates;
